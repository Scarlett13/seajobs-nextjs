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
import {
  IAmplifyPengalamanKerja,
  IPengalamanKerja,
} from "../../../../../constants/profileformconstants/PengalamanKerjaConstants";
import { tambahProyekFields as referFileds } from "../../../../../constants/profileformconstants/ProfileFormConstants";
import v4 from "uuid-browser/v4";
import {
  CreatePengalamanKerjaInput,
  CreatePengalamanKerjaMutation,
  DeletePengalamanKerjaMutation,
  PengalamanKerja,
  UpdatePengalamanKerjaMutation,
} from "../../../../../API";
import { useRouter } from "next/router";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../../../../../graphql/mutations";
import { useUser } from "../../../../../contexts/AmplifyAuthContext";

type ModalReturnType = {
  openModal: () => void;
  title: string;
};

const fixedInputClass =
  "bg-black rounded-none appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-main-cta-button-bg focus:border-main-cta-button-bg focus:z-10 sm:text-sm";

export default function ExampleModal({
  children,
  title,
  listProyekFieldsState,
  setListProyekFieldsState,
  tambahProyekFields,
  setListPengalaman,
  companyid,
  listPengalaman,
  defaultValue,
  projectid,
  setListKerja,
  listKerja,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  title: string;
  listProyekFieldsState?: any;
  setListProyekFieldsState?: React.Dispatch<React.SetStateAction<any>>;
  tambahProyekFields?: typeof referFileds;
  setListPengalaman: React.Dispatch<React.SetStateAction<IPengalamanKerja[]>>;
  companyid: string;
  listPengalaman: IPengalamanKerja[];
  defaultValue?: IAmplifyPengalamanKerja;
  projectid?: string;
  setListKerja: React.Dispatch<React.SetStateAction<IAmplifyPengalamanKerja[]>>;
  listKerja: IAmplifyPengalamanKerja[];
}) {
  const tipe_pekerjaan = require("../../../../../constants/profileformconstants/tipe_pekerjaan.json");

  const e: string = v4();

  const router = useRouter();
  const { profile_id } = router.query;
  const { loading, setLoading } = useUser();

  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
    title: title,
  };

  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: "onTouched",
    defaultValues: {
      nama_proyek: "",
      nama_klien: "",
      posisi_kerja: "",
      deskripsi_proyek: "",
      lokasi_proyek: "",
      jenis_pekerjaan: "",
      proyek_dimulai: "",
      proyek_selesai: "",
    },
  });

  const {
    handleSubmit,
    resetField,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    setValue,
  } = methods;

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      if (!defaultValue && !companyid && !projectid) {
        reset();
      }
    }
  }, [defaultValue, formState, companyid, reset, projectid]);

  React.useLayoutEffect(() => {
    if (defaultValue) {
      const defaultStartProject = new Date();
      var defaultEndProject: any = "";
      if (defaultValue.projectStartMonth && defaultValue.projectStartYear) {
        defaultStartProject.setFullYear(
          defaultValue.projectStartYear as unknown as number
        );
        defaultStartProject.setMonth(
          defaultValue.projectStartMonth as unknown as number
        );
        defaultStartProject.setMonth(defaultStartProject.getMonth() - 1);
      }
      if (defaultValue.projectEndMonth && defaultValue.projectEndYear) {
        defaultEndProject = new Date();
        defaultEndProject.setFullYear(defaultValue.projectEndYear);
        defaultEndProject.setMonth(defaultValue.projectEndMonth);
        defaultEndProject.setMonth(defaultEndProject.getMonth() - 1);
      }
      setValue("nama_proyek", defaultValue.projectName);
      setValue("nama_klien", defaultValue.projectClient);
      setValue("posisi_kerja", defaultValue.position);
      setValue("deskripsi_proyek", defaultValue.projectDescription);
      setValue("lokasi_proyek", defaultValue.projectLocation);
      setValue("jenis_pekerjaan", defaultValue.employmentType);
      setValue("proyek_dimulai", defaultStartProject.toISOString());
      setValue("proyek_selesai", defaultEndProject.toISOString());
    }
  }, [defaultValue, setValue]);

  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========

  const submitListPengalaman = async (data: any) => {
    if (!loading) {
      //initial status untuk proses add, edit data
      /*status:
				0 = initial
				1 = tambah data dari existing company list
				2 = tambah data dari new company list
				3 = edit data
			*/
      setLoading(true);
      let status = 0;

      // console.log("wubbawewdata: ", data);
      // console.log("wubbawewpengalamanid: ", companyid);
      // console.log("wubbawewlistkerja: ", listKerja);
      // console.log("wubbawewpengalaman: ", listPengalaman);

      let index = listKerja.findIndex(
        (pp) => pp.companyId === companyid && pp.projectId === projectid
      );
      console.log("wubbawewindex1: ", index);

      let tempcompanyid = "";
      let tempcompanyname = "";
      let tempcompanyaddress = "";
      let tempcompanysanitisedname = "";

      if (index === -1) {
        //jadinya add data baru, karena belum ada di array listKerja

        //perlu cek apakah ini tambah proyek baru di existing list company atau tambah data baru dari list company baru
        index = listKerja.findIndex((pp) => pp.companyId === companyid);
        if (index === -1) {
          //jadinya tambah proyek baru dari list company baru karena belum ada data di database sama sekali
          status = 2;
          index = listPengalaman.findIndex((pp) => pp.companyId === companyid);
          console.log("wubbawewindex3: ", index);
          tempcompanyid = listPengalaman[index].companyId;
          tempcompanyname = listPengalaman[index].companyName;
          tempcompanyaddress = listPengalaman[index].companyAddress;
          tempcompanysanitisedname = listPengalaman[index].sanitisedCompanyName;
        } else {
          //jadinya tambah proyek baru dari list existing company karena sudah ada data di database
          status = 1;
          console.log("wubbawewindex2: ", index);
          tempcompanyid = listKerja[index].companyId;
          tempcompanyname = listKerja[index].companyName;
          tempcompanyaddress = listKerja[index].companyaddress;
          tempcompanysanitisedname = listKerja[index].sanitisedCompanyName;
        }
      } else {
        //jadinya edit data lama, karena sudah ada di array listKerja
        status = 3;
        console.log("wubbawewindex4: ", index);
        tempcompanyid = listKerja[index].companyId;
        tempcompanyname = listKerja[index].companyName;
        tempcompanyaddress = listKerja[index].companyaddress;
        tempcompanysanitisedname = listKerja[index].sanitisedCompanyName;
      }

      const newPengalaman = {
        projectId: projectid ? projectid : e,
        sanitisedProjectName: `${tempcompanysanitisedname}_${sanitize
          .addUnderscore(data.nama_proyek)
          .toLowerCase()}`,
        projectName: data.nama_proyek,
        projectDescription: data.deskripsi_proyek,
        employmentType: data.jenis_pekerjaan,
        projectClient: data.nama_klien,
        position: data.posisi_kerja,
        projectLocation: data.lokasi_proyek,
        projectStartMonth: DateTime.fromISO(
          new Date(data.proyek_dimulai).toISOString()
        ).toFormat("MM"),
        projectStartYear: DateTime.fromISO(
          new Date(data.proyek_dimulai).toISOString()
        ).toFormat("yyyy"),
        isFinished: data.proyekselesai ? "true" : "false",
        projectEndMonth: DateTime.fromISO(
          new Date(data.proyek_selesai).toISOString()
        ).toFormat("MM"),

        projectEndYear: DateTime.fromISO(
          new Date(data.proyek_selesai).toISOString()
        ).toFormat("yyyy"),
        contractStart: DateTime.fromISO(
          new Date(data.proyek_dimulai).toISOString()
        ).toFormat("MM/yyyy"),
        taId: profile_id as string,
        companyName: tempcompanyname,
        companyId: tempcompanyid,
        companyaddress: tempcompanyaddress,
        sanitisedCompanyName: tempcompanysanitisedname,
      };

      let newProyek;
      if (status === 3) {
        newProyek = await API.graphql<
          GraphQLQuery<UpdatePengalamanKerjaMutation>
        >({
          query: mutations.updatePengalamanKerja,
          variables: { input: newPengalaman },
        });
        setLoading(false);
      } else if (status === 2) {
        newProyek = await API.graphql<
          GraphQLQuery<CreatePengalamanKerjaMutation>
        >({
          query: mutations.createPengalamanKerja,
          variables: { input: newPengalaman },
        });

        const tempDeleteAddedCompany = listPengalaman;
        tempDeleteAddedCompany.splice(index, 1);
        setListPengalaman(tempDeleteAddedCompany);
        setLoading(false);
      } else if (status === 1) {
        newProyek = await API.graphql<
          GraphQLQuery<CreatePengalamanKerjaMutation>
        >({
          query: mutations.createPengalamanKerja,
          variables: { input: newPengalaman },
        });
        setLoading(false);
      }

      setListKerja((pengalamans) => {
        let newWeekdays = pengalamans.map((item, index) => {
          if (item.companyId === companyid && item.projectId === projectid) {
            return { ...newPengalaman };
          } else {
            return { ...item };
          }
        });
        if (status === 1 || status === 2) {
          newWeekdays = [...newWeekdays, newPengalaman];
        }

        return newWeekdays;
      });

      console.log("updatedlistkerja: ", listKerja);
    }

    onClose(setOpen);
  };

  //#endregion  //*======== Form Submit ===========

  //#region  //*=========== Delete Item ===========

  const deleteProject = async (data: any) => {
    if (projectid && companyid && !loading) {
      setLoading(true);

      try {
        const deletePendidikan = await API.graphql<
          GraphQLQuery<DeletePengalamanKerjaMutation>
        >({
          query: mutations.deletePengalamanKerja,
          variables: {
            input: {
              taId: profile_id,
              projectId: projectid,
              companyId: companyid,
            },
          },
        });

        setListKerja((pengalamans) => {
          const index = listKerja.findIndex(
            (pp) => pp.companyId === companyid && pp.projectId === projectid
          );

          if (index !== -1) {
            pengalamans.splice(index, 1);
          }

          const newWeekdays = pengalamans.map((item) => {
            return { ...item };
          });

          return newWeekdays;
        });

        setLoading(false);
        onClose(setOpen);
        return;
      } catch (error) {
        setLoading(false);
        onClose(setOpen);
        return;
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
      // console.log("lebih gede");
      resetField("proyek_selesai");
      return;
    }

    await submitListPengalaman(data);
    // setOpen(false);
    return;
  };

  const onDelete = async (data: any) => {
    await deleteProject(data);
    return;
  };

  const [proyekDimulai, setProyekDimulai] = React.useState();

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
              {tambahProyekFields?.map((field) => {
                if (field.type === "text") {
                  return (
                    <section key={field.titelKey}>
                      <p className="mb-2 font-light text-gray-400">
                        {field.labelText}
                      </p>
                      <Input
                        isTa={true}
                        id={field.id}
                        label={null}
                        validation={
                          field.isRequired === true
                            ? { required: "Nama proyek perlu di isi" }
                            : undefined
                        }
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
                        placeholder={
                          field.id === "proyek_selesai"
                            ? "bulan/tahun - kosongkan jika masih aktif"
                            : "bulan/tahun"
                        }
                        minDate={
                          field.id === "proyek_selesai"
                            ? proyekDimulai
                            : undefined
                        }
                        label={null}
                        customState={
                          field.id === "proyek_dimulai"
                            ? setProyekDimulai
                            : undefined
                        }
                      />
                    </section>
                  );
                } else if (field.type === "jenis_pekerjaan") {
                  return (
                    <section key={field.titelKey} className={"mt-4"}>
                      <p className="mb-1 font-light text-gray-400">
                        {field.labelText}
                      </p>
                      <SearchableSelectInput
                        id={field.id}
                        placeholder="Pilih jenis pekerjaan"
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
              className={defaultValue && companyid && projectid ? "" : "hidden"}
            >
              Hapus proyek
            </Button>
            <Button
              variant="outline"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              {defaultValue && companyid && projectid
                ? "Edit Proyek"
                : "Tambah Proyek"}
            </Button>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}
