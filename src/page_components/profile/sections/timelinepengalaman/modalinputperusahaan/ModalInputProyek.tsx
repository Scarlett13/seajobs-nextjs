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
}: {
  children: (props: ModalReturnType) => JSX.Element;
  title: string;
  listProyekFieldsState?: any;
  setListProyekFieldsState?: React.Dispatch<React.SetStateAction<any>>;
  tambahProyekFields?: typeof referFileds;
  setListPengalaman: React.Dispatch<React.SetStateAction<IPengalamanKerja[]>>;
  pengalamanid: string;
  listPengalaman: IPengalamanKerja[];
}) {
  const tipe_pekerjaan = require("../../../../../constants/profileformconstants/tipe_pekerjaan.json");

  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
    title: title,
  };

  const submitListPengalaman = (data: any) => {
    if (setListPengalaman && listProyekFieldsState) {
      const index = listPengalaman.findIndex(
        (pp) => pp.companyid === pengalamanid
      );
      const newPengalaman: IProject = {
        projectid: `${sanitize
          .addUnderscore(listPengalaman[index].companyid)
          .toLowerCase()}_${sanitize
          .addUnderscore(data.nama_proyek)
          .toLowerCase()}`,
        projectname: data.nama_proyek,
        projectdescription: data.deskripsi_proyek,
        employmenttype: data.jenis_pekerjaan,
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
      };

      const tempdata = listPengalaman;
      const tempproyek = tempdata[index].projects
        ? tempdata[index].projects
        : [];
      tempproyek ? tempproyek.push(newPengalaman) : newPengalaman;
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

  const onClose = (setOpen: {
    (value: React.SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }) => {
    listProyekFieldsState.nama_perusahaan = "";
    listProyekFieldsState.lokasi_perusahaan = "";
    setOpen(false);
  };

  const methods = useForm({
    mode: "onTouched",
  });

  const { handleSubmit, resetField } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const onSubmit = (data: any) => {
    // logger({ data }, 'rhf.tsx line 33');

    // submitListPengalaman(data);

    // !STARTERCONF Remove console log, use logger instead
    // eslint-disable-next-line no-console
    if (data.proyek_selesai < data.proyek_dimulai) {
      console.log("lebih gede");
      resetField("proyek_selesai");
      return;
    }

    submitListPengalaman(data);
    setOpen(false);
    return;
  };

  const [proyekDimulai, setProyekDimulai] = React.useState();
  // console.log(proyekDimulai);

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
                        placeholder="cth: Proyek Jembatan Gemah Ripah Bandung"
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
              variant="outline"
              onClick={() => {
                onClose(setOpen);
              }}
            >
              Label close
            </Button>
            <Button
              variant="outline"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Label2
            </Button>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}
