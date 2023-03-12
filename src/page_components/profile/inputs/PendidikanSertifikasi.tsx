import { Button, Timeline } from "flowbite-react";
import { DateTime } from "luxon";
import { useEffect, useLayoutEffect, useState } from "react";
import { IPendidikanSertifikasi } from "../../../constants/profileformconstants/PendidikanSertifikasiConstants";
import { tambahProyekFields as tambahPendidikanSertifikasiFileds } from "../../../constants/profileformconstants/ProfileFormConstants";
import ModalInputProyek from "../sections/timelinepengalaman/modalinputperusahaan/ModalInputProyek";
import v4 from "uuid-browser/v4";

const currentDate = DateTime.now().toFormat("yyyy-MM");

export interface IPengalamanKerjaProyek {
  listPendidikan: IPendidikanSertifikasi[];
  listPendidikanFiledsState?: any;
  setListPendidikanFieldsState?: React.Dispatch<React.SetStateAction<any>>;
  tambahPendidikanSertifikasiFileds?: typeof tambahPendidikanSertifikasiFileds;
  setListPendidikan: React.Dispatch<
    React.SetStateAction<IPendidikanSertifikasi[]>
  >;
}

const fixedTimelineLocationClassName =
  "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500";

const fixedTimelineClientClassName =
  "mb-1 mt-1 text-md font-normal leading-none text-gray-400 dark:text-gray-500";

const PengalamanKerjaProyek: React.FC<IPengalamanKerjaProyek> = ({
  listPendidikan: listPengalaman,
  listPendidikanFiledsState: listProyekFieldsState,
  setListPendidikanFieldsState: setListProyekFieldsState,
  tambahPendidikanSertifikasiFileds: tambahProyekFields,
  setListPendidikan: setListPengalaman,
  ...inputProps
}) => {
  return (
    <>
      {listPengalaman.map((pengalaman, index) => (
        <div key={v4()} className="my-5 border border-zinc-600 p-4">
          <div className="flow-root">
            <div className="float-left">
              <p className="text-white text-xl font-medium capitalize ml-6">
                {/* {pengalaman.companyname} */}
                Sekolah 1
              </p>
              <p className="text-white text-md capitalize ml-6">
                {/* {`${pengalaman.companyaddress}`} */}
                Address pendidikan
              </p>
              <p className="text-white text-md capitalize ml-6 pb-4">
                {/* {`${
                  arrayDiff.length > 0 && arrayDiff[index]
                    ? arrayDiff[index].isPengalaman
                      ? arrayDiff[index].diff.years < 1
                        ? arrayDiff[index].diff.months + " bulan"
                        : arrayDiff[index].diff.years +
                          " tahun " +
                          (arrayDiff[index].diff.months < 1
                            ? ""
                            : arrayDiff[index]?.diff.months + " bulan")
                      : "Belum ada pengalaman"
                    : "Belum ada pengalaman"
                }`} */}
                Tahun masuk - Tahun keluar
              </p>
            </div>
            <div className="float-right">
              <p className="text-white text-xl font-medium capitalize ml-6">
                &nbsp;
              </p>
              {/* <div className="text-white text-md capitalize ml-6">
							edit pendidikan
                <ModalInputProyek
                  title={"Tambahkan proyek"}
                  pengalamanid={pengalaman.companyid}
                  listPengalaman={listPengalaman}
                  listProyekFieldsState={listProyekFieldsState}
                  setListProyekFieldsState={setListProyekFieldsState}
                  tambahProyekFields={tambahProyekFields}
                  setListPengalaman={setListPengalaman}
                >
                  {({ openModal }) => (
                    <Button
                      color="info"
                      className="px-2 mr-4"
                      onClick={openModal}
                      title={"Tambahkan proyek"}
                    >
                      Tambah proyek
                    </Button>
                  )}
                </ModalInputProyek>
              </div> */}
              <p className="text-white text-md capitalize ml-6 pb-4">&nbsp;</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PengalamanKerjaProyek;
