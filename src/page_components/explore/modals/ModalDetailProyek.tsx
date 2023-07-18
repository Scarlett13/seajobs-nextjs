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
import usePush from "@utils/UsePush";
import { keahlianDbToValue } from "../../../libs/StringUtils";

type ModalReturnType = {
  openModal: () => void;
  title: string;
};

export default function ModalDetailProyek({
  children,
  project,
  taId,
  isTa,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  project: IAmplifyProjectCard;
  taId: string;
  isTa: boolean;
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

  const push = usePush();

  React.useEffect(() => {
    if (open && isTa) {
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

  // console.log("project owner: ", project.companyOwner);

  return (
    <>
      {children(modalReturn)}
      <Modal
        open={open}
        setOpen={setOpen}
        title={project.projectTitle}
        modalContainerClassName={
          isTa ? "bg-form-bg text-white" : "bg-gray-100 text-gray-900"
        }
      >
        <Modal.Section>
          <div className="flex flex-col">
            <Typography variant="h3" color={isTa ? "custom_white" : "primary"}>
              {`${project.projectDescription}`}
            </Typography>
          </div>
          <table className="table-auto sm:table-fixed mt-8">
            <tbody>
              <tr className="sm:mb-4">
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    Pemilik proyek
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    {`: ${
                      project.companyOwner
                        ? project.companyOwner.konsultanName
                        : ""
                    }`}
                  </Typography>
                </td>
              </tr>
              <tr className="sm:mb-4">
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    Klien
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
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
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    Area proyek
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    {`: ${project.projectLocation}`}
                  </Typography>
                </td>
              </tr>
              <tr className="sm:mb-4">
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    Nilai proyek
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    {`: IDR ${project.projectValue}`}
                  </Typography>
                </td>
              </tr>
              <tr className="sm:mb-4">
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    Durasi proyek
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    {`: ${project.projectDuration} bulan`}
                  </Typography>
                </td>
              </tr>
              <tr className="sm:mb-4">
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    Waktu mulai
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    {`: ${DateTime.fromISO(
                      new Date(project.projectStart).toISOString()
                    ).toFormat("dd MMMM yyyy", { locale: "id" })}`}
                  </Typography>
                </td>
              </tr>
              <tr className="sm:mb-4">
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    Bidang keahlian diperlukan
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    {`: ${keahlianDbToValue(project.projectCategories)
                      .toString()
                      .replaceAll(",", ", ")}`}
                  </Typography>
                </td>
              </tr>
              <tr className="sm:mb-4">
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    Daftar sebelum
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="h3"
                    color={isTa ? "custom_white" : "primary"}
                  >
                    {`: ${DateTime.fromISO(
                      new Date(project.projectDeadline).toISOString()
                    ).toFormat("dd MMMM yyyy", { locale: "id" })}`}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Section>
        <Modal.Section>
          <div className="flex justify-end gap-2 mb-4">
            <Button
              variant={isTa ? "primary" : "outline"}
              disabled={isBid}
              type={isTa ? "submit" : "button"}
              onClick={async () => {
                isTa
                  ? await bidProject()
                  : push(`/com/projects/projectdetail/${project.projectId}`);
              }}
            >
              {isTa
                ? isBid
                  ? "Kamu telah memilih proyek ini"
                  : "Pilih proyek"
                : "Detail proyek"}
            </Button>
            <Button
              variant="primary"
              type={isTa ? "submit" : "button"}
              className={`mx-4 bg-yellow-500 ${isTa ? "invisible" : "visible"}`}
              onClick={() => {
                push(`/com/projects/editproject/${project.projectId}`);
              }}
            >
              Edit proyek
            </Button>
          </div>
          <Typography
            variant="c2"
            color="danger"
            className={isTa && isBid ? "block" : "hidden"}
          >
            {errorMessage}
          </Typography>
        </Modal.Section>
      </Modal>
    </>
  );
}
