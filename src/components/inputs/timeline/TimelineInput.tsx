import { Button, Timeline } from "flowbite-react";
import { DateTime } from "luxon";

import { useState } from "react";
import { IPengalamanKerja } from "../../../constants/profileformconstants/PengalamanKerjaConstants";

const currentDate = DateTime.now().toFormat("yyyy-MM");

export interface ITimelineInput {
  listPengalaman: IPengalamanKerja[];
}

interface IDiffTime {
  perusahaanid: string;
  diff: any;
}

const fixedTimelineLocationClassName =
  "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500";

const TimelineInput: React.FC<ITimelineInput> = ({
  listPengalaman,
  ...inputProps
}) => {
  const [totalWorkDuration, setTotalWorkDuration] = useState<string>("");

  var arrayDiff: IDiffTime[] = [];

  listPengalaman.forEach((pengalaman) => {
    var arrayDates: DateTime[] = [];
    pengalaman.projects.forEach((project) => {
      arrayDates.push(
        DateTime.fromISO(
          `${project.projectstartyear}-${project.projectstartmonth.monthnumber}`
        )
      );
      project.projectendmonth
        ? arrayDates.push(
            DateTime.fromISO(
              `${project.projectendyear}-${project.projectendmonth}`
            )
          )
        : arrayDates.push(DateTime.fromISO(currentDate));
    });

    arrayDates.sort((one, two) => (one > two ? -1 : 1));

    const diffToBePushed = arrayDates[0]
      .diff(arrayDates[arrayDates.length - 1], ["years", "months"])
      .toObject();

    arrayDiff.push({
      perusahaanid: pengalaman.companyid,
      diff: diffToBePushed,
    });
  });

  return (
    <>
      {listPengalaman.map((pengalaman, index) => (
        <div
          key={pengalaman.companyid}
          className="my-5 border border-zinc-600 p-4"
        >
          <p className="text-white text-xl font-medium capitalize ml-6">
            {pengalaman.companyname}
          </p>
          <p className="text-white text-md capitalize ml-6">
            {`${pengalaman.companyaddress}`}
          </p>
          <p className="text-white text-md capitalize ml-6 pb-4">
            {`${
              arrayDiff[index].diff.years !== undefined &&
              arrayDiff[index].diff.years < 1
                ? arrayDiff[index].diff.months + " bulan"
                : arrayDiff[index].diff.years +
                  " tahun " +
                  (arrayDiff[index].diff.months !== undefined &&
                  arrayDiff[index].diff.months < 1
                    ? ""
                    : arrayDiff[index].diff.months + " bulan")
            }`}
          </p>
          <Timeline>
            {pengalaman.projects.map((project) => (
              <Timeline.Item key={project.projectid}>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Title>{project.projectname}</Timeline.Title>
                  <Timeline.Time>{`${project.projectstartmonth.monthname} ${
                    project.projectstartyear
                  } - ${
                    project.isstillworking
                      ? "current"
                      : project.projectendmonth?.monthname +
                        " " +
                        project.projectendyear
                  }`}</Timeline.Time>
                  <p className={fixedTimelineLocationClassName}>
                    Bandung, Indonesia
                  </p>
                  <Timeline.Body>
                    Get access to over 20+ pages including a dashboard layout,
                    charts, kanban board, calendar, and pre-order E-commerce &
                    Marketing pages.
                  </Timeline.Body>
                  <Button color="gray" className="px-6">
                    Edit
                  </Button>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      ))}
    </>
  );
};

export default TimelineInput;
