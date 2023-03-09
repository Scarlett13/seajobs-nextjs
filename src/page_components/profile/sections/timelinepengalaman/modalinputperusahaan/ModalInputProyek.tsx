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
  IPengalamanKerja,
  IProject,
} from "../../../../../constants/profileformconstants/PengalamanKerjaConstants";
import { tambahProyekFields as referFileds } from "../../../../../constants/profileformconstants/ProfileFormConstants";
import v4 from "uuid-browser/v4";

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
  pengalamanid,
  listPengalaman,
  defaultValue,
  indexEdit,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  title: string;
  listProyekFieldsState?: any;
  setListProyekFieldsState?: React.Dispatch<React.SetStateAction<any>>;
  tambahProyekFields?: typeof referFileds;
  setListPengalaman: React.Dispatch<React.SetStateAction<IPengalamanKerja[]>>;
  pengalamanid: string;
  listPengalaman: IPengalamanKerja[];
  defaultValue?: any;
  indexEdit?: string;
}) {
  const tipe_pekerjaan = require("../../../../../constants/profileformconstants/tipe_pekerjaan.json");

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
      if (!defaultValue && !indexEdit) {
        reset();
      }
    }
  }, [defaultValue, formState, indexEdit, reset]);

  React.useLayoutEffect(() => {
    if (defaultValue) {
      console.log("defaultvalue: ", defaultValue);
      const defaultStartProject = new Date();
      var defaultEndProject: any = "";
      if (defaultValue.projectstartmonth && defaultValue.projectstartyear) {
        defaultStartProject.setFullYear(defaultValue.projectstartyear);
        defaultStartProject.setMonth(defaultValue.projectstartmonth);
        defaultStartProject.setMonth(defaultStartProject.getMonth() - 1);
      }
      if (defaultValue.projectendtmonth && defaultValue.projectendyear) {
        defaultEndProject = new Date();
        defaultEndProject.setFullYear(defaultValue.projectendyear);
        defaultEndProject.setMonth(defaultValue.projectendtmonth);
        defaultEndProject.setMonth(defaultEndProject.getMonth() - 1);
      }
      setValue("nama_proyek", defaultValue.projectname);
      setValue("nama_klien", defaultValue.projectclientname);
      setValue("posisi_kerja", defaultValue.projectrolename);
      setValue("deskripsi_proyek", defaultValue.projectdescription);
      setValue("lokasi_proyek", defaultValue.projectlocation);
      setValue("jenis_pekerjaan", defaultValue.employmenttype);
      setValue("proyek_dimulai", defaultStartProject.toISOString());
      // setValue("proyek_selesai", "01/2023");
    }
  }, [defaultValue, indexEdit, setValue]);

  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========

  const submitListPengalaman = (data: any) => {
    if (setListPengalaman && listProyekFieldsState) {
      const index = listPengalaman.findIndex(
        (pp) => pp.companyid === pengalamanid
      );

      const newPengalaman: IProject = {
        projectid: indexEdit ? indexEdit : e,
        projectsanitisedname: `${sanitize
          .addUnderscore(listPengalaman[index].companyid)
          .toLowerCase()}_${sanitize
          .addUnderscore(data.nama_proyek)
          .toLowerCase()}`,
        projectname: data.nama_proyek,
        projectdescription: data.deskripsi_proyek,
        employmenttype: data.jenis_pekerjaan,
        projectclientname: data.nama_klien,
        projectrolename: data.posisi_kerja,
        projectlocation: data.lokasi_proyek,
        projectstartmonth: DateTime.fromISO(
          new Date(data.proyek_dimulai).toISOString()
        ).toFormat("MM"),
        projectstartyear: DateTime.fromISO(
          new Date(data.proyek_dimulai).toISOString()
        ).toFormat("yyyy"),
        isprojectfinished: false,
        projectendmonth: data.proyek_selesai
          ? DateTime.fromISO(
              new Date(data.proyek_selesai).toISOString()
            ).toFormat("MM")
          : null,
        projectendyear: data.proyek_selesai
          ? DateTime.fromISO(
              new Date(data.proyek_selesai).toISOString()
            ).toFormat("yyyy")
          : null,
        isstillworking: data.proyekselesai ? false : true,
      };

      const tempdata = listPengalaman;
      const tempproyek = tempdata[index].projects
        ? tempdata[index].projects
        : [];
      if (tempproyek) {
        if (defaultValue && indexEdit) {
          console.log("masuk edit");
          tempproyek.map((item) =>
            item.projectid === indexEdit
              ? Object.assign(item, newPengalaman)
              : item
          );
        } else {
          console.log("masuk add");
          tempproyek.push(newPengalaman);
        }
      }

      tempdata[index].projects = tempproyek;

      listPengalaman.map((pengalaman) => {
        if (pengalaman.companyid === pengalamanid) {
          pengalaman.projects = tempproyek;
        }
      });

      const testdateluxon = DateTime.fromISO(
        new Date(data.proyek_dimulai).toISOString()
      ).toFormat("MM/yyyy");
      console.log("testdate: ", testdateluxon);

      console.log("def dan index: ", defaultValue && indexEdit);
      console.log("def: ", defaultValue);
      console.log(" index: ", indexEdit);

      setListPengalaman((pengalamans) => {
        const newWeekdays = pengalamans.map((item, index) => {
          if (item.companyid === pengalamanid) {
            return { ...item, projects: tempproyek };
          }
          return { ...item };
        });
        return newWeekdays;
      });

      onClose(setOpen);
    }
  };

  //#endregion  //*======== Form Submit ===========

  //#region  //*=========== Delete Item ===========

  const deleteProject = (data: any) => {
    if (setListPengalaman && listProyekFieldsState) {
      const index = listPengalaman.findIndex(
        (pp) => pp.companyid === pengalamanid
      );

      const tempdata = listPengalaman;
      const tempproyek = tempdata[index].projects
        ? tempdata[index].projects
        : [];
      if (tempproyek) {
        const indextobedeleted = tempproyek.findIndex(
          (pp) => pp.projectid === indexEdit
        );
        if (indextobedeleted !== -1) {
          tempproyek.splice(indextobedeleted, 1);
        }
      }

      tempdata[index].projects = tempproyek;

      listPengalaman.map((pengalaman) => {
        if (pengalaman.companyid === pengalamanid) {
          pengalaman.projects = tempproyek;
        }
      });

      setListPengalaman((pengalamans) => {
        const newWeekdays = pengalamans.map((item, index) => {
          if (item.companyid === pengalamanid) {
            return { ...item, projects: tempproyek };
          }
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
      console.log("lebih gede");
      resetField("proyek_selesai");
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
              Hapus proyek
            </Button>
            <Button
              variant="outline"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              {defaultValue && indexEdit ? "Edit Proyek" : "Tambah Proyek"}
            </Button>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}
