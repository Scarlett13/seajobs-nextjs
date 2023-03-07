import { Listbox } from "@headlessui/react";
import { Button, Timeline } from "flowbite-react";
import { IPengalamanKerja } from "../../../../../constants/profileformconstants/PengalamanKerjaConstants";
import {
  tambahPerusahaanFields,
  tambahProyekFields,
} from "../../../../../constants/profileformconstants/ProfileFormConstants";
// import { timelinePengalamanFields } from "../../../../constants/profileformconstants/ProfileFormConstants";
import Input from "../../../../../components/inputs/reguler/InputTemplate";
import TimelineInput from "../../../inputs/timeline/TimelineInput";
import ProfileSectionLayout from "../../../layouts/profilesectionlayout/ProfileSectionLayout";
// import styles from "./TimelinePengalaman.module.css";

export interface ITimelinePengalaman {
  timelinePengalaman?: any;
  // setTimelinePengalaman: React.Dispatch<React.SetStateAction<any>>;
  // TimelinePengalamanFields: typeof timelinePengalamanFields;
  listPengalaman: IPengalamanKerja[];
  setListPengalaman: React.Dispatch<React.SetStateAction<IPengalamanKerja[]>>;
  listPengalamanFieldsState: any;
  setListPengalamanFieldsState: React.Dispatch<React.SetStateAction<any>>;
  tambahPerusahaanFields: typeof tambahPerusahaanFields;
  listProyekFieldsState?: any;
  setListProyekFieldsState?: React.Dispatch<React.SetStateAction<any>>;
  tambahProyekFields?: typeof tambahProyekFields;
}

const TimelinePengalaman: React.FC<ITimelinePengalaman> = ({
  listPengalaman,
  setListPengalaman,
  listPengalamanFieldsState,
  setListPengalamanFieldsState,
  tambahPerusahaanFields,
  listProyekFieldsState,
  setListProyekFieldsState,
  tambahProyekFields,
}) => {
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
      tambahPerusahaanFields={tambahPerusahaanFields}
      listPerusahaanFieldsState={listPengalamanFieldsState}
      setListPerusahaanFieldsState={setListPengalamanFieldsState}
      setListPengalaman={setListPengalaman}
    >
      <TimelineInput
        listPengalaman={listPengalaman}
        listProyekFieldsState={listProyekFieldsState}
        setListProyekFieldsState={setListProyekFieldsState}
        tambahProyekFields={tambahProyekFields}
        setListPengalaman={setListPengalaman}
      />
    </ProfileSectionLayout>
  );
};

export default TimelinePengalaman;
