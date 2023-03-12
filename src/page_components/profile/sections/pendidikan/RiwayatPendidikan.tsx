// import styles from "./RiwayatPendidikan.module.css";

import { IPendidikanSertifikasi } from "../../../../constants/profileformconstants/PendidikanSertifikasiConstants";
import { tambahPendidikanSertifikasiFileds } from "../../../../constants/profileformconstants/ProfileFormConstants";
import ProfileSectionLayout from "../../layouts/profilesectionlayout/ProfileSectionLayout";

export interface IRiwayatPendidikan {
  timelinePengalaman?: any;
  listPengalaman: IPendidikanSertifikasi[];
  setListPengalaman: React.Dispatch<
    React.SetStateAction<IPendidikanSertifikasi[]>
  >;
  listPengalamanFieldsState: any;
  setListPengalamanFieldsState: React.Dispatch<React.SetStateAction<any>>;
  tambahPerusahaanFields: typeof tambahPendidikanSertifikasiFileds;
}

const RiwayatPendidikan: React.FC<IRiwayatPendidikan> = ({
  timelinePengalaman,
  listPengalaman,
  setListPengalaman,
  listPengalamanFieldsState,
  setListPengalamanFieldsState,
  tambahPerusahaanFields,
}) => {
  return (
    <ProfileSectionLayout
      isRequired={false}
      title="Pendidikan dan Sertifikasi"
      id="pendidikan_sertifikasi"
      canBeAdded={true}
      tambahPerusahaanFields={tambahPerusahaanFields}
      listPerusahaanFieldsState={listPengalamanFieldsState}
      setListPerusahaanFieldsState={setListPengalamanFieldsState}
      setListPengalaman={setListPengalaman}
    >
      {/* <div className={""}>{sampleTextProp} - pendidikan</div> */}
    </ProfileSectionLayout>
  );
};

export default RiwayatPendidikan;
