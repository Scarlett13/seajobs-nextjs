// import styles from "./RiwayatPendidikan.module.css";

import ProfileSectionLayout from "../../layouts/profilesectionlayout/ProfileSectionLayout";

export interface IRiwayatPendidikan {
  sampleTextProp: string;
}

const RiwayatPendidikan: React.FC<IRiwayatPendidikan> = ({
  sampleTextProp,
}) => {
  return (
    <ProfileSectionLayout
      isRequired={false}
      title="Pendidikan dan Sertifikasi"
      id="pendidikan_sertifikasi"
      canBeAdded={true}
    >
      {/* <div className={""}>{sampleTextProp} - pendidikan</div> */}
    </ProfileSectionLayout>
  );
};

export default RiwayatPendidikan;
