// import styles from "./ProfileSectionLayout.module.css";
import {
  tambahPerusahaanFields,
  tambahProyekFields,
} from "../../../../constants/profileformconstants/ProfileFormConstants";
import ModalInputPendidikan from "../../sections/pendidikan/modal/ModalInputPendidikan";
import ModalInputPerusahaan from "../../sections/timelinepengalaman/modalinputperusahaan/ModalInputPerusahaan";

export interface IProfileSectionLayout {
  children?: any;
  title: string;
  isRequired: boolean;
  canBeAdded?: boolean;
  id: string;
  listPerusahaanFieldsState?: any;
  setListPerusahaanFieldsState?: React.Dispatch<React.SetStateAction<any>>;
  tambahPerusahaanFields?: typeof tambahPerusahaanFields;
  setListPengalaman?: React.Dispatch<React.SetStateAction<any[]>>;
  disabled: boolean;
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
  disabled,
}) => {
  return (
    <section id={id}>
      <div className="bg-form-bg shadow-md px-8 pt-6 mb-4 pb-4 text-left">
        <div className="mb-4 pb-4">
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
            className={`float-right ${
              canBeAdded && !disabled ? "visible" : "invisible"
            }`}
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
                    onClick={() => {
                      console.log("clicked kerj");
                    }}
                    title={"Tambahkan perusahaan"}
                  >
                    + Tambahkan perusahaan
                  </button>
                )}
              </ModalInputPerusahaan>
            ) : (
              <ModalInputPendidikan
                title={"Tambahkan pendidikan"}
                listPendidikanFieldsState={listPengalamanFieldsState}
                setListPendidikanFieldsState={setListPengalamanFieldsState}
                tambahPendidikanFields={tambahPerusahaanFields}
                setListPendidikan={setListPengalaman}
                taId={""}
              >
                {({ openModal }) => (
                  <button
                    className={`text-form-section-blue text-md -mt-2 font-medium ml-2`}
                    onClick={() => {
                      console.log("clicked pend");
                    }}
                  >
                    + Tambahkan pendidikan
                  </button>
                )}
              </ModalInputPendidikan>
            )}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
};

export default ProfileSectionLayout;
