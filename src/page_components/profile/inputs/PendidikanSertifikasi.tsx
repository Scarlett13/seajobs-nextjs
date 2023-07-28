import { Button, Timeline } from "flowbite-react";
import { DateTime } from "luxon";
import { useEffect, useLayoutEffect, useState } from "react";
import { IPendidikanSertifikasi } from "../../../constants/profileformconstants/PendidikanSertifikasiConstants";
import { tambahProyekFields as tambahPendidikanSertifikasiFileds } from "../../../constants/profileformconstants/ProfileFormConstants";
import ModalInputProyek from "../sections/timelinepengalaman/modalinputperusahaan/ModalInputProyek";
import v4 from "uuid-browser/v4";
import ModalInputPendidikan from "../sections/pendidikan/modal/ModalInputPendidikan";
import { useUser } from "../../../contexts/AmplifyAuthContext";

const currentDate = DateTime.now().toFormat("yyyy-MM");

export interface IPendidikanSertifikasiSection {
  listPendidikan: IPendidikanSertifikasi[];
  listPendidikanFiledsState?: any;
  setListPendidikanFieldsState?: React.Dispatch<React.SetStateAction<any>>;
  tambahPendidikanSertifikasiFileds?: typeof tambahPendidikanSertifikasiFileds;
  setListPendidikan: React.Dispatch<
    React.SetStateAction<IPendidikanSertifikasi[]>
  >;
  taId: string;
  disabled: boolean;
}

const fixedTimelineLocationClassName =
  "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500";

const fixedTimelineClientClassName =
  "mb-1 mt-1 text-md font-normal leading-none text-gray-400 dark:text-gray-500";

const PendidikanSertifikasi: React.FC<IPendidikanSertifikasiSection> = ({
  listPendidikan: listPengalaman,
  listPendidikanFiledsState: listProyekFieldsState,
  setListPendidikanFieldsState: setListProyekFieldsState,
  tambahPendidikanSertifikasiFileds: tambahProyekFields,
  setListPendidikan: setListPengalaman,
  disabled,
  taId,
  ...inputProps
}) => {
  const { isTa } = useUser();
  return (
    <>
      {listPengalaman.map((pengalaman, index) => (
        <div key={v4()} className="my-5 border border-zinc-600 p-4">
          <div className="flow-root">
            <div className="float-left">
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-xl font-medium capitalize ml-6`}
              >
                {pengalaman.institutionName}
              </p>
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-lg font-medium capitalize ml-6`}
              >
                {pengalaman.pendidikanType} - {pengalaman.courseName}
              </p>
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-md capitalize ml-6`}
              >
                {`${
                  pengalaman.institutionAddress
                    ? pengalaman.institutionAddress + " \n"
                    : ""
                }`}
              </p>
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-md ml-6`}
              >
                {`${
                  pengalaman.institutionUrl
                    ? pengalaman.institutionUrl + " \n"
                    : ""
                } `}
              </p>
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-md capitalize ml-6 pb-4`}
              >
                {`${pengalaman.entryMonth} / ${pengalaman.entryYear} - ${pengalaman.endMonth} / ${pengalaman.endYear}`}
              </p>
            </div>
            <div className={`float-right ${disabled ? "hidden" : "visible"}`}>
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-xl font-medium capitalize ml-6`}
              >
                &nbsp;
              </p>
              <div
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-md capitalize ml-6`}
              >
                <ModalInputPendidikan
                  title={"Edit Pendidikan"}
                  listPendidikan={listPengalaman}
                  listPendidikanFieldsState={listProyekFieldsState}
                  setListPendidikanFieldsState={setListProyekFieldsState}
                  tambahPendidikanFields={tambahProyekFields}
                  setListPendidikan={setListPengalaman}
                  defaultValue={pengalaman}
                  indexEdit={pengalaman.pendidikanId}
                  taId={taId}
                >
                  {({ openModal }) => (
                    <Button
                      color="gray"
                      className="px-2 mr-4"
                      onClick={openModal}
                      title={"Edit"}
                    >
                      Edit
                    </Button>
                  )}
                </ModalInputPendidikan>
              </div>
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-md capitalize ml-6 pb-4`}
              >
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PendidikanSertifikasi;
