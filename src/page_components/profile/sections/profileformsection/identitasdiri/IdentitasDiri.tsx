import { Listbox } from "@headlessui/react";
import {
  IBidangKeahlian,
  identitasDiriFields,
} from "../../../../../constants/profileformconstants/ProfileFormConstants";
import Input from "../../../../../components/inputs/reguler/InputTemplate";
import ProfileSectionLayout from "../../../layouts/profilesectionlayout/ProfileSectionLayout";
// import styles from "./IdentitasDiri.module.css";

export interface IIdentitasDiri {
  selectedKeahlian: IBidangKeahlian[];
  setSelectedKeahlian: React.Dispatch<React.SetStateAction<IBidangKeahlian[]>>;
  identitasDiri: any;
  setIdentitasDiri: React.Dispatch<React.SetStateAction<any>>;
  identitasDiriFields: typeof identitasDiriFields;
}

const IdentitasDiri: React.FC<IIdentitasDiri> = ({
  selectedKeahlian,
  setSelectedKeahlian,
  identitasDiri,
  setIdentitasDiri,
  identitasDiriFields,
}) => {
  const fixedInputClass =
    "bg-black appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-main-cta-button-bg focus:border-main-cta-button-bg focus:z-10 sm:text-sm text-left";

  const dataKeahlian: IBidangKeahlian[] = require("../../../../../constants/profileformconstants/bidang_keahlian.json");

  const handleIdentitasDiriChange = (e: {
    target: { id: any; value: any };
  }) => {
    setIdentitasDiri({ ...identitasDiri, [e.target.id]: e.target.value });
  };

  return (
    <ProfileSectionLayout isRequired={true} title="data diri" id="id_diri">
      {identitasDiriFields.map((field) =>
        field.type === "bidang_keahlian" ? (
          <section key={field.titelKey} className={"mb-4"}>
            <p className="font-light text-gray-400">{field.labelText}</p>
            <Listbox
              value={selectedKeahlian}
              onChange={setSelectedKeahlian}
              multiple
            >
              {/* <Listbox.Label className={"text-white mb-2"}>
                Bidang Keahlian:
              </Listbox.Label> */}
              <Listbox.Button className={fixedInputClass}>
                {selectedKeahlian.length > 0
                  ? selectedKeahlian
                      .map((keahlian) =>
                        keahlian.iscollapsible
                          ? keahlian.subcategoryname
                          : keahlian.categoryname
                      )
                      .join(", ")
                  : "Silahkan pilih bidang keahlian terlebih dahulu"}
              </Listbox.Button>
              <Listbox.Options className={fixedInputClass}>
                {dataKeahlian.map((keahlian) => (
                  <Listbox.Option
                    className={`my-1.5 ${
                      selectedKeahlian.find(
                        (e: { id: number }) => e.id === keahlian.id
                      )
                        ? "text-form-section-blue"
                        : "text-white"
                    }`}
                    key={
                      keahlian.iscollapsible
                        ? keahlian.subcategoryname
                        : keahlian.categoryname
                    }
                    value={keahlian}
                  >
                    {selectedKeahlian.find(
                      (e: { id: number }) => e.id === keahlian.id
                    ) ? (
                      <a className="mr-2 text-bold text-form-section-blue">x</a>
                    ) : (
                      <a className="mr-2 text-bold text-white">+</a>
                    )}
                    {keahlian.iscollapsible
                      ? keahlian.subcategoryname
                      : keahlian.categoryname}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </section>
        ) : (
          <section key={field.titelKey}>
            <p className="-mb-4 font-light text-gray-400">{field.labelText}</p>
            <Input
              key={field.id}
              handleChange={handleIdentitasDiriChange}
              value={identitasDiri[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          </section>
        )
      )}
    </ProfileSectionLayout>
  );
};

export default IdentitasDiri;
