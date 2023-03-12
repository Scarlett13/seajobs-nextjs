import { IPengalamanKerja } from "../../../../constants/profileformconstants/PengalamanKerjaConstants";
import {
  tambahPerusahaanFields,
  tambahProyekFields,
} from "../../../../constants/profileformconstants/ProfileFormConstants";
import PengalamanKerjaProyek from "../../inputs/timeline/PengalamanKerjaProyek";
import ProfileSectionLayout from "../../layouts/profilesectionlayout/ProfileSectionLayout";

export interface ITimelinePengalaman {
  timelinePengalaman?: any;
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
      <PengalamanKerjaProyek
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
