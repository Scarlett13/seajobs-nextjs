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

type ModalReturnType = {
  openModal: () => void;
  title: string;
};

const fixedInputClass =
  "bg-black rounded-none appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-main-cta-button-bg focus:border-main-cta-button-bg focus:z-10 sm:text-sm";

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
}) {
  const tipe_pekerjaan = require("../../../../../constants/profileformconstants/tipe_pendidikan.json");

  const e: string = v4();

  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
    title: title,
  };

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
      tanggal_masuk: "",
      tanggal_selesai: "",
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

  React.useLayoutEffect(() => {
    if (defaultValue) {
      const defaultStartDate = new Date();
      var defaultEndDate: any = "";
      if (defaultValue.bulanmasuk && defaultValue.tahunmasuk) {
        defaultStartDate.setFullYear(defaultValue.tahunmasuk);
        defaultStartDate.setMonth(defaultValue.bulanmasuk);
        defaultStartDate.setMonth(defaultStartDate.getMonth() - 1);
      }
      if (defaultValue.bulanselesai && defaultValue.tahunselesai) {
        defaultEndDate = new Date();
        defaultEndDate.setFullYear(defaultValue.tahunselesai);
        defaultEndDate.setMonth(defaultValue.bulanselesai);
        defaultEndDate.setMonth(defaultEndDate.getMonth() - 1);
      }
      setValue("nama_institusi", defaultValue.namainstitusi);
      setValue("tipe_pendidikan", defaultValue.tipependidikan);
      setValue("jurusan_keahlian", defaultValue.namajurusan);
      setValue("deskripsi_pendidikan", defaultValue.deskripsipendidikan);
      setValue("alamat_institusi", defaultValue.alamatinstitusi);
      setValue("url_institusi", defaultValue.urlinstitusi);
      setValue("tanggal_masuk", defaultStartDate.toISOString());
      setValue("tanggal_selesai", defaultEndDate.toISOString());
    }
  }, [defaultValue, indexEdit, setValue]);

  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const submitListPengalaman = (data: any) => {
    if (setListPendidikan && listPendidikanFieldsState) {
      const newPendidikanSertifikasi: IPendidikanSertifikasi = {
        idpendidikan: indexEdit ? indexEdit : e,
        tipependidikan: data.tipe_pendidikan,
        namainstitusi: data.nama_institusi,
        namajurusan: data.jurusan_keahlian,
        deskripsipendidikan: data.deskripsi_pendidikan,
        alamatinstitusi: data.alamat_institusi,
        urlinstitusi: data.url_institusi,
        bulanmasuk: DateTime.fromISO(
          new Date(data.tanggal_masuk).toISOString()
        ).toFormat("MM"),
        tahunmasuk: DateTime.fromISO(
          new Date(data.tanggal_masuk).toISOString()
        ).toFormat("yyyy"),
        bulanselesai: DateTime.fromISO(
          new Date(data.tanggal_selesai).toISOString()
        ).toFormat("MM"),
        tahunselesai: DateTime.fromISO(
          new Date(data.tanggal_selesai).toISOString()
        ).toFormat("yyyy"),
      };

      setListPendidikan((pengalamans) => {
        const newWeekdays = pengalamans.map((item, index) => {
          if (item.idpendidikan === indexEdit) {
            return { ...newPendidikanSertifikasi };
          } else {
            return { ...item };
          }
        });
        if (indexEdit && defaultValue) {
          return newWeekdays;
        } else {
          return [...newWeekdays, newPendidikanSertifikasi];
        }
      });

      onClose(setOpen);
    }
  };

  //#endregion  //*======== Form Submit ===========

  //#region  //*=========== Delete Item ===========

  const deleteProject = (data: any) => {
    if (setListPendidikan && listPendidikanFieldsState) {
      setListPendidikan((pengalamans) => {
        const indextobedeleted = pengalamans.findIndex(
          (pp) => pp.idpendidikan === indexEdit
        );

        if (indextobedeleted !== -1) {
          pengalamans.splice(indextobedeleted, 1);
        }

        const newWeekdays = pengalamans.map((item) => {
          return { ...item };
        });

        return newWeekdays;
      });
    }
  };

  //#endregion  //*======== Delete Item ===========

  const onClose = (setOpen: {
    (value: React.SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }) => {
    setOpen(false);
  };

  const onSubmit = (data: any) => {
    // logger({ data }, 'rhf.tsx line 33');

    // submitListPengalaman(data);

    // !STARTERCONF Remove console log, use logger instead
    // eslint-disable-next-line no-console
    if (data.proyek_selesai && data.proyek_selesai < data.proyek_dimulai) {
      return;
    }

    submitListPengalaman(data);
    setOpen(false);
    return;
  };

  const onDelete = (data: any) => {
    deleteProject(data);
    setOpen(false);
    return;
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
                          field.id === "pendidikan_dimulai"
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
