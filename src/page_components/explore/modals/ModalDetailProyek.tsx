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
  CompanyProjectBidder,
  CompanyProjectBidderByTaQuery,
  CompanyProjectBidderByTaQueryVariables,
  CreateCompanyProjectBidderInput,
  CreateCompanyProjectBidderMutation,
  CreatePendidikanSertifikasiMutation,
  DeletePendidikanSertifikasiMutation,
  EnumBiddingStatus,
  GetCompanyProjectBidderQuery,
  UpdatePendidikanSertifikasiMutation,
} from "../../../API";
import { useRouter } from "next/router";
import { useUser } from "../../../contexts/AmplifyAuthContext";
import { IAmplifyProjectCard } from "../../../constants/exploreformconstants/ProjectCard";
import Typography from "../../../components/typography/Typography";
import * as queries from "../../../graphql/queries";

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
  const [isBid, setIsBid] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
    title: project.projectTitle,
  };

  React.useEffect(() => {
    if (open) {
      // setLoading(true);

      const getProjectBidded = async () => {
        //query projectbidded

        const variables: CompanyProjectBidderByTaQueryVariables = {
          taId: taId,
          filter: {
            projectId: {
              eq: project.projectId,
            },
          },
        };
        try {
          const getProjectBidded = await API.graphql<
            GraphQLQuery<CompanyProjectBidderByTaQuery>
          >({
            query: queries.companyProjectBidderByTa,
            variables: variables,
          });

          if (
            getProjectBidded.data &&
            getProjectBidded.data.companyProjectBidderByTa &&
            getProjectBidded.data.companyProjectBidderByTa.items
          ) {
            console.log("masuk udah di bid 1");
            if (
              getProjectBidded.data.companyProjectBidderByTa.items.length > 0
            ) {
              console.log("masuk udah di bid 2");
              setIsBid(true);
              setErrorMessage(
                "Anda sudah mendaftar di proyek ini, silahkan pantau progress di dashboard"
              );
            } else {
              setIsBid(false);
            }
            // setLoading(false);
            console.log("modal project: ", getProjectBidded);
            console.log("error bid1: ", errorMessage);
          }
        } catch (error) {
          // setLoading(false);
          setIsBid(true);
          setErrorMessage(
            "Error saat mengambil data, silangkan coba beberapa saat lagi"
          );
          console.log("error bid2: ", errorMessage);
          console.log(error);
        }
      };
      getProjectBidded();
    }
  }, [open]);

  //#endregion  //*======== Delete Item ===========

  const onClose = (setOpen: {
    (value: React.SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }) => {
    setOpen(false);
  };

  const bidProject = async () => {
    try {
      const input: CreateCompanyProjectBidderInput = {
        taId: taId,
        projectId: project.projectId,
        konsultanId: project.projectOwner,
        biddingStatus: EnumBiddingStatus.SUBMITTED,
      };

      const bidProject = await API.graphql<
        GraphQLQuery<CreateCompanyProjectBidderMutation>
      >({
        query: mutations.createCompanyProjectBidder,
        variables: { input: input },
      });

      setIsBid(true);

      console.log("bidded: ", bidProject);
    } catch (error) {
      setIsBid(false);
      setErrorMessage(
        "Gagal saat bid project, silahkan mual ulang halaman dan coba bid lagi!"
      );
    }
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
          <div className="flex flex-col">
            <Typography variant="h3" color={"custom_white"}>
              {`${project.projectDescription}`}
            </Typography>
          </div>
          <table className="table-auto sm:table-fixed mt-8">
            <tbody>
              <tr className="sm:mb-4">
                <td>
                  <Typography variant="h3" color="custom_white">
                    Pemilik proyek
                  </Typography>
                </td>
                <td>
                  <Typography variant="h3" color="custom_white">
                    {`: ${project.projectOwner}`}
                  </Typography>
                </td>
              </tr>
              <tr className="sm:mb-4">
                <td>
                  <Typography variant="h3" color="custom_white">
                    Klien
                  </Typography>
                </td>
                <td>
                  <Typography variant="h3" color="custom_white">
                    {`: ${
                      project.projectClient
                        ? project.projectClient
                        : "Tidak disebutkan"
                    }`}
                  </Typography>
                </td>
              </tr>
              <tr className="sm:mb-4">
                <td>
                  <Typography variant="h3" color="custom_white">
                    Area proyek
                  </Typography>
                </td>
                <td>
                  <Typography variant="h3" color="custom_white">
                    {`: ${project.projectLocation}`}
                  </Typography>
                </td>
              </tr>
              <tr className="sm:mb-4">
                <td>
                  <Typography variant="h3" color="custom_white">
                    Nilai proyek
                  </Typography>
                </td>
                <td>
                  <Typography variant="h3" color="custom_white">
                    {`: IDR ${project.projectValue}`}
                  </Typography>
                </td>
              </tr>
              <tr className="sm:mb-4">
                <td>
                  <Typography variant="h3" color="custom_white">
                    Durasi proyek
                  </Typography>
                </td>
                <td>
                  <Typography variant="h3" color="custom_white">
                    {`: ${project.projectDuration}`}
                  </Typography>
                </td>
              </tr>
              <tr className="sm:mb-4">
                <td>
                  <Typography variant="h3" color="custom_white">
                    Waktu mulai
                  </Typography>
                </td>
                <td>
                  <Typography variant="h3" color="custom_white">
                    {`: ${project.projectStart}`}
                  </Typography>
                </td>
              </tr>
              <tr className="sm:mb-4">
                <td>
                  <Typography variant="h3" color="custom_white">
                    Bidang keahlian diperlukan
                  </Typography>
                </td>
                <td>
                  <Typography variant="h3" color="custom_white">
                    {`: ${project.projectCategories}`}
                  </Typography>
                </td>
              </tr>
              <tr className="sm:mb-4">
                <td>
                  <Typography variant="h3" color="custom_white">
                    Daftar sebelum
                  </Typography>
                </td>
                <td>
                  <Typography variant="h3" color="custom_white">
                    {`: ${project.projectDeadline}`}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Section>
        <Modal.Section>
          <div className="flex justify-end gap-2 mb-4">
            <Button
              variant={"primary"}
              disabled={isBid}
              type="submit"
              onClick={async () => {
                await bidProject();
              }}
            >
              {isBid ? "Kamu telah memilih proyek ini" : "Pilih proyek"}
            </Button>
          </div>
          <Typography
            variant="c2"
            color="danger"
            className={isBid ? "block" : "hidden"}
          >
            {errorMessage}
          </Typography>
        </Modal.Section>
      </Modal>
    </>
  );
}
