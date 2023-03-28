// import styles from "./RiwayatPendidikan.module.css";

import { IPendidikanSertifikasi } from "../../../../constants/profileformconstants/PendidikanSertifikasiConstants";
import { tambahPendidikanSertifikasiFileds } from "../../../../constants/profileformconstants/ProfileFormConstants";
import PendidikanSertifikasi from "../../inputs/PendidikanSertifikasi";
import ProfileSectionLayout from "../../layouts/profilesectionlayout/ProfileSectionLayout";

export interface IRiwayatPendidikan {
  timelinePengalaman?: any;
  listPendidikan: IPendidikanSertifikasi[];
  setListPendidikan: React.Dispatch<
    React.SetStateAction<IPendidikanSertifikasi[]>
  >;
  listPendidikanFieldsState: any;
  setListPendidikanFieldsState: React.Dispatch<React.SetStateAction<any>>;
  tambahPendidikanFields: typeof tambahPendidikanSertifikasiFileds;
  taId: string;
  disabled: boolean;
}

const RiwayatPendidikan: React.FC<IRiwayatPendidikan> = ({
  timelinePengalaman,
  listPendidikan,
  setListPendidikan,
  listPendidikanFieldsState,
  setListPendidikanFieldsState,
  tambahPendidikanFields,
  taId,
  disabled,
}) => {
  console.log("waiit, ", tambahPendidikanFields);
  return (
    <ProfileSectionLayout
      disabled={disabled}
      isRequired={false}
      title="Pendidikan dan Sertifikasi"
      id="pendidikan_sertifikasi"
      canBeAdded={true}
      tambahPerusahaanFields={tambahPendidikanFields}
      listPerusahaanFieldsState={listPendidikanFieldsState}
      setListPerusahaanFieldsState={setListPendidikanFieldsState}
      setListPengalaman={setListPendidikan}
    >
      <PendidikanSertifikasi
        disabled={disabled}
        listPendidikan={listPendidikan}
        listPendidikanFiledsState={listPendidikanFieldsState}
        setListPendidikanFieldsState={setListPendidikanFieldsState}
        tambahPendidikanSertifikasiFileds={tambahPendidikanFields}
        setListPendidikan={setListPendidikan}
        taId={taId}
      />
    </ProfileSectionLayout>
  );
};

export default RiwayatPendidikan;
