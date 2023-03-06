// import styles from "./ProfileSectionLayout.module.css";

import { IPengalamanKerja } from "../../../../constants/profileformconstants/PengalamanKerjaConstants";
import {
  tambahPerusahaanFields,
  tambahProyekFields,
} from "../../../../constants/profileformconstants/ProfileFormConstants";
import ModalInputPerusahaan from "../../sections/profileformsection/timelinepengalaman/modalinputperusahaan/ModalInputPerusahaan";

export interface IProfileSectionLayout {
  children?: any;
  title: string;
  isRequired: boolean;
  canBeAdded?: boolean;
  id: string;
  listPerusahaanFieldsState?: any;
  setListPerusahaanFieldsState?: React.Dispatch<React.SetStateAction<any>>;
  tambahPerusahaanFields?: typeof tambahPerusahaanFields;
  setListPengalaman?: React.Dispatch<React.SetStateAction<IPengalamanKerja[]>>;
}

const ProfileSectionLayout: React.FC<IProfileSectionLayout> = ({
  children,
  title,
  isRequired,
  canBeAdded,
  id,
  listPerusahaanFieldsState: listPengalamanFieldsState,
  setListPerusahaanFieldsState: setListPengalamanFieldsState,
  tambahPerusahaanFields,
  setListPengalaman,
}) => {
  return (
    <section id={id}>
      <main className="bg-form-bg shadow-md px-8 pt-6 mb-4 pb-4 flex flex-col justify-center lg:w-4/6">
        <div className="mb-4 justify-center">
          <div className="float-left">
            <label className="text-form-section-blue font-medium uppercase">
              {title}
            </label>
            <label
              className={`text-form-section-required-red text-xl font-medium uppercase ml-2  ${
                isRequired ? "visible" : "invisible"
              }`}
            >
              *
            </label>
          </div>
          <div
            className={`float-right ${canBeAdded ? "visible" : "invisible"}`}
          >
            {id === "pengalaman_kerja_dan_proyek" ? (
              <ModalInputPerusahaan
                title={"Tambahkan perusahaan"}
                listPengalamanFieldsState={listPengalamanFieldsState}
                setListPengalamanFieldsState={setListPengalamanFieldsState}
                tambahPerusahaanFields={tambahPerusahaanFields}
                setListPengalaman={setListPengalaman}
              >
                {({ openModal }) => (
                  <button
                    className={`text-form-section-blue text-md -mt-2 font-medium ml-2`}
                    onClick={openModal}
                    title={"Tambahkan perusahaan"}
                  >
                    + Tambahkan perusahaan
                  </button>
                )}
              </ModalInputPerusahaan>
            ) : (
              <ModalInputPerusahaan title={"Tambahkan perusahaan"}>
                {({ openModal }) => (
                  <button
                    className={`text-form-section-blue text-md -mt-2 font-medium ml-2`}
                    onClick={openModal}
                  >
                    + Tambahkan pendidikan
                  </button>
                )}
              </ModalInputPerusahaan>
            )}
          </div>
        </div>

        {children}
      </main>
    </section>
  );
};

export default ProfileSectionLayout;
