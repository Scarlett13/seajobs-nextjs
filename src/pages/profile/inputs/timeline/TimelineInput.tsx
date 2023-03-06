import { Button, Timeline } from "flowbite-react";
import { DateTime } from "luxon";
import { useLayoutEffect, useState } from "react";

import { IPengalamanKerja } from "../../../../constants/profileformconstants/PengalamanKerjaConstants";
import { tambahProyekFields } from "../../../../constants/profileformconstants/ProfileFormConstants";
import ModalInputProyek from "../../sections/profileformsection/timelinepengalaman/modalinputperusahaan/ModalInputProyek";

const currentDate = DateTime.now().toFormat("yyyy-MM");

export interface ITimelineInput {
  listPengalaman: IPengalamanKerja[];
  listProyekFieldsState?: any;
  setListProyekFieldsState?: React.Dispatch<React.SetStateAction<any>>;
  tambahProyekFields?: typeof tambahProyekFields;
  setListPengalaman: React.Dispatch<React.SetStateAction<IPengalamanKerja[]>>;
}

interface IDiffTime {
  perusahaanid: string;
  diff: any;
}

const fixedTimelineLocationClassName =
  "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500";

const TimelineInput: React.FC<ITimelineInput> = ({
  listPengalaman,
  listProyekFieldsState,
  setListProyekFieldsState,
  tambahProyekFields,
  setListPengalaman,
  ...inputProps
}) => {
  console.log("error pengalaman: ", listPengalaman);
  // var arrayDiff: IDiffTime[] = [];

  const [arrayDiff, setArrayDiff] = useState<IDiffTime[]>([]);

  useLayoutEffect(() => {
    let tempArrayDiff: IDiffTime[] = [];

    listPengalaman.forEach((pengalaman) => {
      var arrayCalculateDiff: any[] = [];
      if (pengalaman.projects) {
        pengalaman.projects.forEach((project) => {
          const diffToBePushed = DateTime.fromISO(
            `${project.projectendyear}-${project.projectendmonth}`
          ).diff(
            DateTime.fromISO(
              `${project.projectstartyear}-${project.projectstartmonth}`
            ),
            ["years", "months"]
          );

          arrayCalculateDiff = [...arrayCalculateDiff, diffToBePushed];
        });

        let totalmonths = 0;
        let totalyears = 0;

        arrayCalculateDiff.forEach((diff) => {
          totalmonths += diff.months;
          totalyears += diff.years;
        });
        while (totalmonths > 12) {
          totalmonths -= 12;
          totalyears += 1;
        }
        const newArrayDiff = {
          perusahaanid: pengalaman.companyid,
          diff: { months: totalmonths, years: totalyears },
        };

        console.log("newarray: ", newArrayDiff);

        tempArrayDiff = [...tempArrayDiff, newArrayDiff];
      }
    });

    setArrayDiff(tempArrayDiff);
    console.log("arraydiff1: ", tempArrayDiff);
  }, [listPengalaman]);

  // TODO: kalau ngambil proyek dan gak ngambil proyek tetep sama, itung pake ini. cara atas kalau itung per proyek aja
  // console.log("arraydates sebelum sort: ", arrayDates);
  // useLayoutEffect(() => {
  //   let tempArrayDiff: IDiffTime[] = [];

  //   listPengalaman.forEach((pengalaman) => {
  //     var arrayDates: DateTime[] = [];
  //     if (pengalaman.projects) {
  //       pengalaman.projects.forEach((project) => {
  //         arrayDates.push(
  //           DateTime.fromISO(
  //             `${project.projectstartyear}-${project.projectstartmonth}`
  //           )
  //         );
  //         project.projectendmonth
  //           ? arrayDates.push(
  //               DateTime.fromISO(
  //                 `${project.projectendyear}-${project.projectendmonth}`
  //               )
  //             )
  //           : arrayDates.push(DateTime.fromISO(currentDate));
  //       });

  //       arrayDates.sort((one, two) => (one > two ? -1 : 1));

  //       const diffToBePushed = arrayDates[0]
  //         .diff(arrayDates[arrayDates.length - 1], ["years", "months"])
  //         .toObject();

  //       const newArrayDiff = {
  //         perusahaanid: pengalaman.companyid,
  //         diff: diffToBePushed,
  //       };

  //       tempArrayDiff = [...tempArrayDiff, newArrayDiff];
  //     }
  //   });

  //   setArrayDiff(tempArrayDiff);
  //   console.log("arraydiff1: ", tempArrayDiff);
  // }, [listPengalaman]);

  console.log("arraydiff2: ", arrayDiff.length);
  return (
    <>
      {listPengalaman.map((pengalaman, index) => (
        <div
          key={pengalaman.companyid}
          className="my-5 border border-zinc-600 p-4"
        >
          <div className="flow-root">
            <div className="float-left">
              <p className="text-white text-xl font-medium capitalize ml-6">
                {pengalaman.companyname}
              </p>
              <p className="text-white text-md capitalize ml-6">
                {`${pengalaman.companyaddress}`}
              </p>
              <p className="text-white text-md capitalize ml-6 pb-4">
                {`${
                  arrayDiff.length > 0 && arrayDiff[index]
                    ? arrayDiff[index]?.diff.years !== undefined &&
                      arrayDiff[index]?.diff.years < 1
                      ? arrayDiff[index]?.diff.months + " bulan"
                      : arrayDiff[index]?.diff.years +
                        " tahun " +
                        (arrayDiff[index]?.diff.months !== undefined &&
                        arrayDiff[index]?.diff.months < 1
                          ? ""
                          : arrayDiff[index]?.diff.months + " bulan")
                    : "Belum ada pengalaman"
                }`}
              </p>
            </div>
            <div className="float-right">
              <p className="text-white text-xl font-medium capitalize ml-6">
                &nbsp;
              </p>
              <div className="text-white text-md capitalize ml-6">
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
              </div>
              <p className="text-white text-md capitalize ml-6 pb-4">&nbsp;</p>
            </div>
          </div>

          <div>
            <Timeline>
              {pengalaman?.projects?.map((project) => (
                <Timeline.Item key={project.projectid}>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Title>{project.projectname}</Timeline.Title>
                    <Timeline.Time>{`${project.projectstartmonth} / ${
                      project.projectstartyear
                    } - ${
                      project.isstillworking
                        ? "current"
                        : project.projectendmonth +
                          " / " +
                          project.projectendyear
                    }`}</Timeline.Time>
                    <p className={fixedTimelineLocationClassName}>
                      {`${project.projectlocation}`}
                    </p>
                    <Timeline.Body>
                      {`${project.projectdescription}`}
                    </Timeline.Body>
                    <Button color="gray" className="px-6">
                      Edit
                    </Button>
                  </Timeline.Content>
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        </div>
      ))}
    </>
  );
};

export default TimelineInput;
