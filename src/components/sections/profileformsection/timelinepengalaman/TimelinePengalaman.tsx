import { Listbox } from "@headlessui/react";
import { Button, Timeline } from "flowbite-react";
import { IPengalamanKerja } from "../../../../constants/profileformconstants/PengalamanKerjaConstants";
// import { timelinePengalamanFields } from "../../../../constants/profileformconstants/ProfileFormConstants";
import Input from "../../../inputs/reguler/InputTemplate";
import TimelineInput from "../../../inputs/timeline/TimelineInput";
import ProfileSectionLayout from "../../../layouts/profilesectionlayout/ProfileSectionLayout";
// import styles from "./TimelinePengalaman.module.css";

export interface ITimelinePengalaman {
  timelinePengalaman?: any;
  // setTimelinePengalaman: React.Dispatch<React.SetStateAction<any>>;
  // TimelinePengalamanFields: typeof timelinePengalamanFields;
  listPengalaman: IPengalamanKerja[];
  setListPengalaman?: React.Dispatch<React.SetStateAction<IPengalamanKerja[]>>;
}

const TimelinePengalaman: React.FC<ITimelinePengalaman> = (
  listPengalaman,
  setListPengalaman
) => {
  // const handleTimelinePengalamanChange = (e: {
  //   target: { id: any; value: any };
  // }) => {
  //   //TODO: validation check
  //   setTimelinePengalaman({
  //     ...TimelinePengalaman,
  //     [e.target.id]: e.target.value,
  //   });
  // };

  console.log(listPengalaman);

  return (
    <ProfileSectionLayout
      isRequired={false}
      canBeAdded={true}
      title="Pengalaman kerja dan proyek"
      id="pengalaman_kerja_dan_proyek"
    >
      <TimelineInput listPengalaman={listPengalaman.listPengalaman} />
    </ProfileSectionLayout>
  );
};

export default TimelinePengalaman;
