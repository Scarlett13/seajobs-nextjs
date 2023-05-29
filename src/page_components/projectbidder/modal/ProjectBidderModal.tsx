import * as React from "react";
import Modal from "../../../components/modal/Modal";
import Typography from "../../../components/typography/Typography";
import Button from "../../../components/buttons/custombuttons/Button";

import * as queries from "../../../graphql/queries";

import { API, GraphQLQuery } from "@aws-amplify/api";
import { GetTenagaAhliQuery } from "../../../API";

import { Toaster, toast } from "react-hot-toast";
import { calculateDiffDate } from "../../../libs/luxonHelpers";
import useStateRef from "react-usestateref";
import { DateTime } from "luxon";
import { groupBy } from "../../../libs/arrayHelpers";
import { IAmplifyPengalamanKerja } from "../../../constants/profileformconstants/PengalamanKerjaConstants";
import { keahlianDbToValue } from "../../../libs/StringUtils";

type ModalReturnType = {
  openModal: () => void;
};

interface IDiffTime {
  perusahaanid: string;
  perusahaanName: string;
  diff: any;
  isPengalaman: boolean;
}

export default function ExampleModal({
  children,
  taId,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  taId: String;
}) {
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
  };

  const [taDetail, setTaDetail] = React.useState<any>();

  React.useEffect(() => {
    async function getTaDetail() {
      const taDetail = await API.graphql<GraphQLQuery<GetTenagaAhliQuery>>({
        query: queries.getTenagaAhliCard,
        variables: { taId: taId },
      });

      if (!taDetail.data || !taDetail.data.getTenagaAhli) {
        toast.error("Detail tenaga ahli tidak ditemukan");
        return;
      }

      setTaDetail(taDetail.data.getTenagaAhli);
    }

    if (open) getTaDetail();
    else setTaDetail(null);
  }, [open, taId]);

  function showAgeMessage(dob: string) {
    const ageObject = calculateDiffDate(dob);
    if (!ageObject) return "";
    let message = "";
    if (ageObject.years && ageObject.years > 0)
      message += `${Math.floor(ageObject.years)} tahun`;
    if (ageObject.months && ageObject.months > 0)
      message += ` ${Math.floor(ageObject.months)} bulan`;
    return message;
  }

  function showWorkExperienceMessage(listKerja: IAmplifyPengalamanKerja[]) {
    let tempArrayDiff: IDiffTime[] = [];

    const resultFormats = groupBy(listKerja, (i) => i.companyId);

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
      // tempArray.push({ companyId: key as String, projects: value });
      // Do something interesting with the property of bigObject...
    }
    var arrayCalculateDiff: any[] = [];
    listKerja.forEach((proyekan) => {
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
        perusahaanid: proyekan.companyId,
        diff: { months: totalmonths, years: totalyears },
        isPengalaman: totalmonths > 0 || totalyears > 0,
      };

      // console.log("newarray: ", newArrayDiff);

      tempArrayDiff = [...tempArrayDiff, newArrayDiff as IDiffTime];
    });

    let tempMonth = 0;
    let tempYear = 0;

    if (tempArrayDiff.length < 1) {
      return "Belum ada pengalaman kerja";
    }

    tempArrayDiff.forEach((diff, index) => {
      tempMonth += diff.diff.months;
      tempYear += diff.diff.years;
    });

    while (tempMonth >= 12) {
      tempMonth -= 12;
      tempYear += 1;
    }

    return `${tempYear} tahun ${tempMonth} bulan`;
  }

  function showKeahlianMessage(keahlian: string) {
    return keahlianDbToValue(keahlian).toString().replaceAll(",", ", ");
  }

  return (
    <>
      <Toaster />
      {children(modalReturn)}
      <Modal open={open} setOpen={setOpen} title="Detail Tenaga Ahli">
        <Modal.Section>
          <section className={"grid grid-rows-2 gap-2"}>
            <div className={"grid grid-cols-2 "}>
              <Typography variant="b2">Nama penuh</Typography>
              <Typography variant="b2">
                :{" "}
                {taDetail
                  ? taDetail.taFullName
                    ? taDetail.taFullName
                    : ""
                  : ""}
              </Typography>
            </div>
            <div className={"grid grid-cols-2 "}>
              <Typography variant="b2">{"Umur"}</Typography>
              <Typography variant="b2">
                {taDetail
                  ? taDetail.taDob
                    ? `: ${showAgeMessage(taDetail.taDob)}`
                    : ""
                  : ""}
              </Typography>
            </div>
            <div className={"grid grid-cols-2 "}>
              <Typography variant="b2">{"Kewarganegaraan"}</Typography>
              <Typography variant="b2">
                {taDetail
                  ? taDetail.taCitizenship
                    ? `: ${taDetail.taCitizenship}`
                    : ""
                  : ""}
              </Typography>
            </div>
            <div className={"grid grid-cols-2 "}>
              <Typography variant="b2">{"Residen status"}</Typography>
              <Typography variant="b2">
                {taDetail
                  ? taDetail.taResidentStatus
                    ? `: ${taDetail.taResidentStatus}`
                    : ""
                  : ""}
              </Typography>
            </div>
            <div className={"grid grid-cols-2 "}>
              <Typography variant="b2">{"Alamat lengkap"}</Typography>
              <Typography variant="b2">
                {taDetail
                  ? taDetail.taAddress
                    ? `: ${taDetail.taAddress}`
                    : ""
                  : ""}
              </Typography>
            </div>
            <div className={"grid grid-cols-2 "}>
              <Typography variant="b2">{"Deskripsi diri"}</Typography>
              <Typography variant="b2">
                {taDetail
                  ? taDetail.taSelfDescription
                    ? `: ${taDetail.taSelfDescription}`
                    : ""
                  : ""}
              </Typography>
            </div>
            <div className={"grid grid-cols-2 "}>
              <Typography variant="b2">
                {"Total lama pengalaman kerja"}
              </Typography>
              <Typography variant="b2">
                {taDetail
                  ? taDetail.pengalamanKerja &&
                    taDetail.pengalamanKerja.items.length > 0
                    ? `: ${showWorkExperienceMessage(
                        taDetail.pengalamanKerja.items
                      )}`
                    : ": Belum ada pengalaman kerja"
                  : ": Belum ada pengalaman kerja"}
              </Typography>
            </div>
            <div className={"grid grid-cols-2 "}>
              <Typography variant="b2">{"Bidang keahlian"}</Typography>
              <Typography variant="b2">
                {taDetail
                  ? taDetail.taExpertise
                    ? `: ${showKeahlianMessage(taDetail.taExpertise)}`
                    : ""
                  : ""}
              </Typography>
            </div>
          </section>
        </Modal.Section>
        <Modal.Section>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Tutup
            </Button>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}
