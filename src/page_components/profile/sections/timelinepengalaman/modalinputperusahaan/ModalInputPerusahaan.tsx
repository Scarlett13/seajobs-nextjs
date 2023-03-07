import * as React from "react";
import Button from "../../../../../components/buttons/custombuttons/Button";
import InputTemplate from "../../../../../components/inputs/reguler/InputTemplate";
import Modal from "../../../../../components/modal/Modal";
import { IPengalamanKerja } from "../../../../../constants/profileformconstants/PengalamanKerjaConstants";
import { tambahPerusahaanFields as referFileds } from "../../../../../constants/profileformconstants/ProfileFormConstants";
import { sanitize } from "string-sanitizer";

type ModalReturnType = {
  openModal: () => void;
  title: string;
};

export default function ExampleModal({
  children,
  title,
  listPengalamanFieldsState,
  setListPengalamanFieldsState,
  tambahPerusahaanFields,
  setListPengalaman,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  title: string;
  listPengalamanFieldsState?: any;
  setListPengalamanFieldsState?: React.Dispatch<React.SetStateAction<any>>;
  tambahPerusahaanFields?: typeof referFileds;
  setListPengalaman?: React.Dispatch<React.SetStateAction<IPengalamanKerja[]>>;
}) {
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
    title: title,
  };

  const handlePerusahaanChange = (e: { target: { id: any; value: any } }) => {
    if (setListPengalamanFieldsState) {
      setListPengalamanFieldsState({
        ...listPengalamanFieldsState,
        [e.target.id]: e.target.value,
      });
    }
  };

  const submitListPengalaman = (setOpen: {
    (value: React.SetStateAction<boolean>): void;
    (value: React.SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }) => {
    if (
      setListPengalaman &&
      (listPengalamanFieldsState.nama_perusahaan.length > 1 ||
        listPengalamanFieldsState.lokasi_perusahaan.length > 1)
    ) {
      const newPerusahaan: IPengalamanKerja = {
        companyid: sanitize
          .addUnderscore(listPengalamanFieldsState.nama_perusahaan)
          .toLowerCase(),
        companysanitisedname: sanitize
          .addUnderscore(listPengalamanFieldsState.nama_perusahaan)
          .toLowerCase(),
        companyname: listPengalamanFieldsState.nama_perusahaan,
        companyaddress: listPengalamanFieldsState.lokasi_perusahaan,
        companylogo: null,
        projects: [],
      };

      setListPengalaman((oldArray) => [...oldArray, newPerusahaan]);
      onClose(setOpen);
    }
  };

  const onClose = (setOpen: {
    (value: React.SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }) => {
    listPengalamanFieldsState.nama_perusahaan = "";
    listPengalamanFieldsState.lokasi_perusahaan = "";
    setOpen(false);
  };

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
          {tambahPerusahaanFields?.map((field) => (
            <section key={field.titelKey}>
              <p className="-mb-4 font-light text-gray-400">
                {field.labelText}
              </p>
              <InputTemplate
                key={field.id}
                handleChange={handlePerusahaanChange}
                value={listPengalamanFieldsState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            </section>
          ))}
        </Modal.Section>
        <Modal.Section>
          <div className="flex justify-end gap-2">
            {/* <Button
              variant="outline"
              onClick={() => {
                onClose(setOpen);
              }}
            >
              Label close
            </Button> */}
            <Button
              variant="outline"
              onClick={() => {
                submitListPengalaman(setOpen);
              }}
            >
              Tambahkan Perusahaan
            </Button>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}
