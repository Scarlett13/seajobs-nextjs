import { DateTime } from "luxon";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { sanitize } from "string-sanitizer";
import Button from "../../../components/buttons/custombuttons/Button";
import Input from "../../../components/forms/Input";
import MonthYearPicker from "../../../components/forms/MonthYearPicker";
import SearchableSelectInput from "../../../components/forms/SearchableSelectInput";
import TextArea from "../../../components/forms/TextArea";
import Modal from "../../../components/modal/Modal";
import { tambahPendidikanSertifikasiFileds as referFileds } from "../../../constants/profileformconstants/ProfileFormConstants";
import v4 from "uuid-browser/v4";
import { IPendidikanSertifikasi } from "../../../constants/profileformconstants/PendidikanSertifikasiConstants";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../../../graphql/mutations";
import {
  CreatePendidikanSertifikasiMutation,
  DeletePendidikanSertifikasiMutation,
  UpdatePendidikanSertifikasiMutation,
} from "../../../API";
import { useRouter } from "next/router";
import { useUser } from "../../../contexts/AmplifyAuthContext";
import { IAmplifyProjectCard } from "../../../constants/exploreformconstants/ProjectCard";

type ModalReturnType = {
  openModal: () => void;
  title: string;
};

export default function ModalDetailProyek({
  children,
  project,
  taId,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  project: IAmplifyProjectCard;
  taId: string;
}) {
  const { loading, setLoading } = useUser();

  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
    title: project.projectTitle,
  };

  //#endregion  //*======== Delete Item ===========

  const onClose = (setOpen: {
    (value: React.SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }) => {
    setOpen(false);
  };

  return (
    <>
      {children(modalReturn)}
      <Modal
        open={open}
        setOpen={setOpen}
        title={project.projectTitle}
        modalContainerClassName={"bg-form-bg text-white"}
      >
        <Modal.Section>
          <div>Detail proyek</div>
        </Modal.Section>
        <Modal.Section>
          <div className="flex justify-end gap-2">
            <Button
              variant={"primary"}
              disabled={disabled}
              type="submit"
              onClick={() => {}}
            >
              {disabled ? "Kamu telah memilih proyek ini" : "Pilih proyek"}
            </Button>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}
