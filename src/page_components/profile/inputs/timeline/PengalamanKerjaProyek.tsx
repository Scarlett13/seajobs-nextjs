import { Button, Timeline } from "flowbite-react";
import { DateTime } from "luxon";
import { useEffect, useLayoutEffect } from "react";
import useStateRef from "react-usestateref";
import { PengalamanKerja } from "../../../../API";
import {
  IAmplifyPengalamanKerja,
  IPengalamanKerja,
} from "../../../../constants/profileformconstants/PengalamanKerjaConstants";
import { tambahProyekFields } from "../../../../constants/profileformconstants/ProfileFormConstants";
import { useUser } from "../../../../contexts/AmplifyAuthContext";
import ModalInputProyek from "../../sections/timelinepengalaman/modalinputperusahaan/ModalInputProyek";

const currentDate = DateTime.now().toFormat("yyyy-MM");

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);

export interface IPengalamanKerjaProyek {
  listPengalaman: IPengalamanKerja[];
  listProyekFieldsState?: any;
  setListProyekFieldsState?: React.Dispatch<React.SetStateAction<any>>;
  tambahProyekFields?: typeof tambahProyekFields;
  setListPengalaman: React.Dispatch<React.SetStateAction<IPengalamanKerja[]>>;
  setListKerja: React.Dispatch<React.SetStateAction<IAmplifyPengalamanKerja[]>>;
  listKerja: IAmplifyPengalamanKerja[];
  disabled: boolean;
  isTa?: boolean;
}

interface IDiffTime {
  perusahaanid: string;
  diff: any;
  isPengalaman: boolean;
}

interface IFormattedListKerja {
  companyId: String;
  projects: IAmplifyPengalamanKerja[];
}

const PengalamanKerjaProyek: React.FC<IPengalamanKerjaProyek> = ({
  listPengalaman,
  listProyekFieldsState,
  setListProyekFieldsState,
  tambahProyekFields,
  setListPengalaman,
  setListKerja,
  listKerja,
  disabled,
  ...inputProps
}) => {
  console.log("error pengalaman: ", listPengalaman);
  // var arrayDiff: IDiffTime[] = [];

  const [arrayDiff, setArrayDiff] = useStateRef<IDiffTime[]>([]);
  const [formattedListKerja, setFormattedListKerja] = useStateRef<
    IFormattedListKerja[]
  >([]);

  const { loading, setLoading, isTa } = useUser();

  const fixedTimelineLocationClassName = isTa
    ? "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
    : "mb-1 text-sm font-normal leading-none text-gray-900 dark:text-gray-900";

  const fixedTimelineClientClassName = isTa
    ? "mb-1 mt-1 text-md font-normal leading-none text-gray-400 dark:text-gray-500"
    : "mb-1 mt-1 text-md font-normal leading-none text-gray-900 dark:text-gray-900";

  const fixedTimelineTitleClassName = isTa
    ? "text-lg font-semibold text-white"
    : "text-lg font-semibold text-gray-900 ";

  useEffect(() => {
    // if (!loading) {
    console.log("updatedlistkerja");
    let tempArrayDiff: IDiffTime[] = [];

    const resultFormats = groupBy(listKerja, (i) => i.companyId);

    let tempArray: IFormattedListKerja[] = [];

    for (const key in resultFormats) {
      // Get the strongly typed value with this name:
      let value = resultFormats[key];
      // Now we have the the strongly typed value for this key (depending on how bigObject was typed in the first place).
      value = value.sort((one, two) =>
        `${one.projectEndMonth}-${one.projectEndYear}` >
        `${two.projectEndMonth}-${two.projectEndYear}`
          ? -1
          : 1
      );
      tempArray.push({ companyId: key as String, projects: value });
      // Do something interesting with the property of bigObject...
    }

    setFormattedListKerja([...tempArray]);

    tempArray.forEach((project) => {
      var arrayCalculateDiff: any[] = [];

      project.projects.forEach((proyekan) => {
        var diffToBePushed;

        diffToBePushed = DateTime.fromISO(
          `${proyekan.projectEndYear}-${proyekan.projectEndMonth}`
        ).diff(
          DateTime.fromISO(
            `${proyekan.projectStartYear}-${proyekan.projectStartMonth}`
          ),
          ["years", "months"]
        );

        arrayCalculateDiff = [...arrayCalculateDiff, diffToBePushed];
      });

      let totalmonths = 0;
      let totalyears = 0;

      arrayCalculateDiff.forEach((diff, index) => {
        totalmonths += diff.months + 1;
        totalyears += diff.years;
      });
      while (totalmonths >= 12) {
        totalmonths -= 12;
        totalyears += 1;
      }

      const newArrayDiff = {
        perusahaanid: project.companyId,
        diff: { months: totalmonths, years: totalyears },
        isPengalaman: totalmonths > 0 || totalyears > 0,
      };

      console.log("newarray: ", newArrayDiff);

      tempArrayDiff = [...tempArrayDiff, newArrayDiff as IDiffTime];
    });

    setArrayDiff(tempArrayDiff);
    // }
  }, [listKerja]);

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

  return (
    <>
      {formattedListKerja.map((pengalaman, index) => (
        <div
          key={pengalaman.companyId as string}
          className="my-5 border border-zinc-600 p-4"
        >
          <div className="flow-root">
            <div className="float-left">
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-xl font-medium capitalize ml-6`}
              >
                {pengalaman.projects[0].companyName}
              </p>
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-md capitalize ml-6`}
              >
                {pengalaman.projects[0].companyaddress}
              </p>
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-md capitalize ml-6 pb-4`}
              >
                {`${
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
                }`}
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
                <ModalInputProyek
                  title={"Tambahkan proyek"}
                  companyid={pengalaman.companyId as string}
                  listPengalaman={listPengalaman}
                  listProyekFieldsState={listProyekFieldsState}
                  setListProyekFieldsState={setListProyekFieldsState}
                  tambahProyekFields={tambahProyekFields}
                  setListPengalaman={setListPengalaman}
                  setListKerja={setListKerja}
                  listKerja={listKerja}
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
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-md capitalize ml-6 pb-4`}
              >
                &nbsp;
              </p>
            </div>
          </div>

          <div>
            <Timeline>
              {pengalaman.projects.map((project, index) => (
                <Timeline.Item key={project.projectId}>
                  <Timeline.Point />
                  <Timeline.Content>
                    <p className={fixedTimelineTitleClassName}>
                      {project.projectName}
                    </p>
                    <p className={fixedTimelineClientClassName}>
                      {`${project.projectClient}`}
                    </p>
                    <p className={fixedTimelineClientClassName}>
                      {`${project.position}`}
                    </p>
                    <p className={fixedTimelineLocationClassName}>{`${
                      project.projectStartMonth
                    } / ${project.projectStartYear} - ${
                      !project.isFinished
                        ? "current"
                        : project.projectEndMonth +
                          " / " +
                          project.projectEndYear
                    }`}</p>
                    <p className={fixedTimelineLocationClassName}>
                      {`${project.projectLocation}`}
                    </p>
                    <p className={fixedTimelineLocationClassName}>
                      {`${project.projectDescription}`}
                    </p>
                    <ModalInputProyek
                      title={"Edit proyek"}
                      companyid={pengalaman.companyId as string}
                      listPengalaman={listPengalaman}
                      listProyekFieldsState={listProyekFieldsState}
                      setListProyekFieldsState={setListProyekFieldsState}
                      tambahProyekFields={tambahProyekFields}
                      setListPengalaman={setListPengalaman}
                      defaultValue={project}
                      projectid={project.projectId}
                      setListKerja={setListKerja}
                      listKerja={listKerja}
                    >
                      {({ openModal }) => (
                        <Button
                          color="gray"
                          className={`px-2 mr-4 ${
                            disabled ? "hidden" : "visible"
                          }`}
                          onClick={openModal}
                          title={"Edit proyek"}
                        >
                          Edit
                        </Button>
                      )}
                    </ModalInputProyek>
                  </Timeline.Content>
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        </div>
      ))}

      {listPengalaman.map((pengalaman, index) => (
        <div
          key={pengalaman.companyId as string}
          className="my-5 border border-zinc-600 p-4"
        >
          <div className="flow-root">
            <div className="float-left">
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-xl font-medium capitalize ml-6`}
              >
                {pengalaman.companyName}
              </p>
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-md capitalize ml-6`}
              >
                {pengalaman.companyAddress}
              </p>
              <p
                className={`${
                  isTa ? "text-white" : "text-gray-900"
                } text-md capitalize ml-6 pb-4`}
              >
                {`Belum ada pengalaman`}
              </p>
            </div>
            <div className="float-right">
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
                <ModalInputProyek
                  title={"Tambahkan proyek"}
                  companyid={pengalaman.companyId as string}
                  listPengalaman={listPengalaman}
                  listProyekFieldsState={listProyekFieldsState}
                  setListProyekFieldsState={setListProyekFieldsState}
                  tambahProyekFields={tambahProyekFields}
                  setListPengalaman={setListPengalaman}
                  setListKerja={setListKerja}
                  listKerja={listKerja}
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

export default PengalamanKerjaProyek;
