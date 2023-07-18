import { DateTime } from "luxon";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { sanitize } from "string-sanitizer";
import Button from "../../../../../components/buttons/custombuttons/Button";
import Input from "../../../../../components/forms/Input";
import MonthYearPicker from "../../../../../components/forms/MonthYearPicker";
import SearchableSelectInput from "../../../../../components/forms/SearchableSelectInput";
import TextArea from "../../../../../components/forms/TextArea";
import Modal from "../../../../../components/modal/Modal";
import { tambahPendidikanSertifikasiFileds as referFileds } from "../../../../../constants/profileformconstants/ProfileFormConstants";
import v4 from "uuid-browser/v4";
import { IPendidikanSertifikasi } from "../../../../../constants/profileformconstants/PendidikanSertifikasiConstants";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../../../../../graphql/mutations";
import {
  CreatePendidikanSertifikasiMutation,
  DeletePendidikanSertifikasiMutation,
  UpdatePendidikanSertifikasiMutation,
} from "../../../../../API";
import { useRouter } from "next/router";
import { useUser } from "../../../../../contexts/AmplifyAuthContext";
import { isValidDate } from "../../../../../libs/StringUtils";

type ModalReturnType = {
  openModal: () => void;
  title: string;
};

export default function ExampleModal({
  children,
  title,
  listPendidikanFieldsState,
  setListPendidikanFieldsState,
  tambahPendidikanFields,
  setListPendidikan,
  listPendidikan,
  defaultValue,
  indexEdit,
  taId,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  title: string;
  listPendidikanFieldsState?: any;
  setListPendidikanFieldsState?: React.Dispatch<React.SetStateAction<any>>;
  tambahPendidikanFields?: typeof referFileds;
  setListPendidikan?: React.Dispatch<
    React.SetStateAction<IPendidikanSertifikasi[]>
  >;
  listPendidikan?: IPendidikanSertifikasi[];
  defaultValue?: any;
  indexEdit?: string;
  taId: string;
}) {
  const tipe_pekerjaan = require("../../../../../constants/profileformconstants/tipe_pendidikan.json");

  const e: string = v4();
  const router = useRouter();
  const { profile_id } = router.query;
  const { loading, setLoading } = useUser();

  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
    title: title,
  };

  console.log("wubbdapend22: ", taId);

  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: "onTouched",
    defaultValues: {
      tipe_pendidikan: "",
      nama_institusi: "",
      jurusan_keahlian: "",
      deskripsi_pendidikan: "",
      alamat_institusi: "",
      url_institusi: "",
      pendidikan_masuk: "",
      pendidikan_selesai: "",
    },
  });

  const {
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    setValue,
  } = methods;

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      if (!defaultValue && !indexEdit) {
        reset();
      }
    }
  }, [defaultValue, formState, indexEdit, reset]);

  React.useEffect(() => {
    if (defaultValue) {
      const defaultStartDate = new Date();
      var defaultEndDate: any = "";
      if (defaultValue.entryMonth && defaultValue.entryYear) {
        defaultStartDate.setFullYear(defaultValue.entryYear);
        defaultStartDate.setMonth(defaultValue.entryMonth);
        defaultStartDate.setMonth(defaultStartDate.getMonth() - 1);
      }
      if (defaultValue.endMonth && defaultValue.endYear) {
        defaultEndDate = new Date();
        defaultEndDate.setFullYear(defaultValue.endYear);
        defaultEndDate.setMonth(defaultValue.endMonth);
        defaultEndDate.setMonth(defaultEndDate.getMonth() - 1);
      }
      console.log("defaultstartdate: " + defaultStartDate);
      setValue("nama_institusi", defaultValue.institutionName);
      setValue("tipe_pendidikan", defaultValue.pendidikanType);
      setValue("jurusan_keahlian", defaultValue.courseName);
      setValue("deskripsi_pendidikan", defaultValue.pendidikanDescription);
      setValue("alamat_institusi", defaultValue.institutionAddress);
      setValue("url_institusi", defaultValue.institutionUrl);
      setValue(
        "pendidikan_masuk",
        isValidDate(defaultStartDate) ? defaultStartDate.toISOString() : ""
      );
      setValue(
        "pendidikan_selesai",
        isValidDate(defaultEndDate) ? defaultEndDate.toISOString() : ""
      );
    }
  }, [defaultValue, indexEdit, setValue]);

  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const submitListPengalaman = async (data: any) => {
    if (setListPendidikan && listPendidikanFieldsState) {
      const newPendidikanSertifikasi = {
        pendidikanId: indexEdit ? indexEdit : e,
        taId: profile_id as string,
        sanitisedInstitutionName: `${sanitize
          .addUnderscore(data.nama_institusi)
          .toLowerCase()}`,
        pendidikanType: data.tipe_pendidikan,
        institutionName: data.nama_institusi,
        courseName: data.jurusan_keahlian,
        pendidikanDescription: data.deskripsi_pendidikan,
        institutionAddress: data.alamat_institusi,
        institutionUrl: data.url_institusi,
        entryMonth: DateTime.fromISO(
          new Date(data.pendidikan_masuk).toISOString()
        ).toFormat("MM"),
        entryYear: DateTime.fromISO(
          new Date(data.pendidikan_masuk).toISOString()
        ).toFormat("yyyy"),
        endMonth: DateTime.fromISO(
          new Date(data.pendidikan_selesai).toISOString()
        ).toFormat("MM"),
        endYear: DateTime.fromISO(
          new Date(data.pendidikan_selesai).toISOString()
        ).toFormat("yyyy"),
        createdOn: undefined,
        updatedOn: undefined,
      };

      console.log("wubbapend: ", newPendidikanSertifikasi);

      setListPendidikan((pengalamans) => {
        let newWeekdays = pengalamans.map((item, index) => {
          if (item.pendidikanId === indexEdit) {
            return { ...newPendidikanSertifikasi };
          } else {
            return { ...item };
          }
        });
        if (indexEdit && defaultValue) {
          newWeekdays.sort((a, b) => (a.entryYear < b.entryYear ? -1 : 1));
          return newWeekdays;
        } else {
          newWeekdays = [...newWeekdays, newPendidikanSertifikasi];
          newWeekdays.sort((a, b) => (a.entryYear < b.entryYear ? -1 : 1));
          return newWeekdays;
        }
      });

      let pendidikan;

      if (defaultValue && indexEdit) {
        pendidikan = await API.graphql<
          GraphQLQuery<UpdatePendidikanSertifikasiMutation>
        >({
          query: mutations.updatePendidikanSertifikasi,
          variables: { input: newPendidikanSertifikasi },
        });
      } else {
        pendidikan = await API.graphql<
          GraphQLQuery<CreatePendidikanSertifikasiMutation>
        >({
          query: mutations.createPendidikanSertifikasi,
          variables: { input: newPendidikanSertifikasi },
        });
      }

      console.log("wubbapend: ", newPendidikanSertifikasi);

      onClose(setOpen);
    }
  };

  //#endregion  //*======== Form Submit ===========

  //#region  //*=========== Delete Item ===========

  const deleteProject = async (data: any) => {
    if (defaultValue && indexEdit && setListPendidikan && !loading) {
      setListPendidikan((pengalamans) => {
        const indextobedeleted = pengalamans.findIndex(
          (pp) => pp.pendidikanId === indexEdit
        );

        if (indextobedeleted !== -1) {
          pengalamans.splice(indextobedeleted, 1);
        }

        const newWeekdays = pengalamans.map((item) => {
          return { ...item };
        });

        return newWeekdays;
      });

      try {
        const deletePendidikan = await API.graphql<
          GraphQLQuery<DeletePendidikanSertifikasiMutation>
        >({
          query: mutations.deletePendidikanSertifikasi,
          variables: {
            input: {
              taId: defaultValue.taId,
              pendidikanId: defaultValue.pendidikanId,
              endYear: defaultValue.endYear,
            },
          },
        });

        setListPendidikan((pengalamans) => {
          const indextobedeleted = pengalamans.findIndex(
            (pp) => pp.pendidikanId === indexEdit
          );

          if (indextobedeleted !== -1) {
            pengalamans.splice(indextobedeleted, 1);
          }

          const newWeekdays = pengalamans.map((item) => {
            return { ...item };
          });

          return newWeekdays;
        });

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };

  //#endregion  //*======== Delete Item ===========

  const onClose = (setOpen: {
    (value: React.SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }) => {
    setOpen(false);
  };

  const onSubmit = async (data: any) => {
    // logger({ data }, 'rhf.tsx line 33');

    // submitListPengalaman(data);

    // !STARTERCONF Remove console log, use logger instead
    // eslint-disable-next-line no-console
    if (data.proyek_selesai && data.proyek_selesai < data.proyek_dimulai) {
      return;
    }

    await submitListPengalaman(data);
    // setOpen(false);
    // return;
  };

  const onDelete = async (data: any) => {
    await deleteProject(data);
    // setOpen(false);
    // return;
  };

  const [pendidikanDimulai, setPendidikanDimulai] = React.useState();

  return (
    <>
      {children(modalReturn)}
      <Modal
        open={open}
        setOpen={setOpen}
        title={title}
        modalContainerClassName={"bg-form-bg text-white"}
      >
        <Modal.Section>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w space-y-3 pb-4"
            >
              {tambahPendidikanFields?.map((field) => {
                if (field.type === "text") {
                  return (
                    <section key={field.titelKey}>
                      <p className="mb-2 font-light text-gray-400">
                        {field.labelText}
                      </p>
                      <Input
                        isTa={true}
                        id={field.id}
                        type={field.type}
                        label={null}
                        validation={{
                          required: {
                            value: field.isRequired,
                            message: `${field.labelText} harus di isi!`,
                          },
                        }}
                        placeholder={field.placeholder}
                        helperText={undefined}
                      />
                    </section>
                  );
                } else if (field.type === "textarea") {
                  return (
                    <section key={field.titelKey} className={"mb-4"}>
                      <p className="mb-2 font-light text-gray-400">
                        {field.labelText}
                      </p>
                      <TextArea
                        isTa={true}
                        id={field.id}
                        label={null}
                        validation={
                          field.isRequired === true
                            ? { required: "Select Input must be filled" }
                            : undefined
                        }
                        maxLength={200}
                      />
                    </section>
                  );
                } else if (field.type === "month_year") {
                  return (
                    <section key={field.titelKey} className={"mt-4"}>
                      <p className="mb-1 font-light text-gray-400">
                        {field.labelText}
                      </p>
                      <MonthYearPicker
                        id={field.id}
                        name={field.name}
                        validation={
                          field.isRequired === true
                            ? {
                                required: "Date must be filled",
                                valueAsDate: false,
                              }
                            : {
                                valueAsDate: false,
                              }
                        }
                        placeholder={"bulan/tahun"}
                        minDate={
                          field.id === "pendidikan_selesai"
                            ? pendidikanDimulai
                            : undefined
                        }
                        label={null}
                        customState={
                          field.id === "pendidikan_masuk"
                            ? setPendidikanDimulai
                            : undefined
                        }
                      />
                    </section>
                  );
                } else if (field.type === "tipe_pendidikan") {
                  return (
                    <section key={field.titelKey} className={"mt-4"}>
                      <p className="mb-1 font-light text-gray-400">
                        {field.labelText}
                      </p>
                      <SearchableSelectInput
                        id={field.id}
                        placeholder="Pilih jenis pendidikan"
                        options={tipe_pekerjaan}
                        validation={
                          field.isRequired === true
                            ? { required: "Select Input must be filled" }
                            : undefined
                        }
                        label={null}
                        isTa={true}
                      />
                    </section>
                  );
                } else if (field.type === "url") {
                  return (
                    <section key={field.titelKey}>
                      <p className="mb-2 font-light text-gray-400">
                        {field.labelText}
                      </p>
                      <Input
                        isTa={true}
                        id={field.id}
                        type={field.type}
                        label={null}
                        validation={{
                          required: {
                            value: field.isRequired,
                            message: `${field.labelText} harus di isi!`,
                          },
                          pattern: {
                            value:
                              /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/gi,
                            message: "url tidak valid",
                          },
                        }}
                        placeholder={field.placeholder}
                        helperText={undefined}
                      />
                    </section>
                  );
                }
              })}
            </form>
          </FormProvider>
        </Modal.Section>
        <Modal.Section>
          <div className="flex justify-end gap-2">
            <Button
              variant="danger"
              type="submit"
              onClick={handleSubmit(onDelete)}
              className={defaultValue && indexEdit ? "" : "hidden"}
            >
              Hapus Pendidikan
            </Button>
            <Button
              variant="outline"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              {defaultValue && indexEdit
                ? "Edit Pendidikan"
                : "Tambah Pendidikan"}
            </Button>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}
