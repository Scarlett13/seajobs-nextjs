import { Listbox } from "@headlessui/react";
import { infoKontakFields } from "../../../../constants/profileformconstants/ProfileFormConstants";
import Input from "../../../inputs/reguler/InputTemplate";
import ProfileSectionLayout from "../../../layouts/profilesectionlayout/ProfileSectionLayout";
// import styles from "./InfoKontak.module.css";

export interface IInfoKontak {
  infoKontak: any;
  setInfoKontak: React.Dispatch<React.SetStateAction<any>>;
  infoKontakFields: typeof infoKontakFields;
}

const InfoKontak: React.FC<IInfoKontak> = ({
  infoKontak,
  setInfoKontak,
  infoKontakFields,
}) => {
  const handleInfoKontakChange = (e: { target: { id: any; value: any } }) => {
    //TODO: validation check
    setInfoKontak({ ...infoKontak, [e.target.id]: e.target.value });
  };

  return (
    <ProfileSectionLayout
      isRequired={true}
      title="info kontak"
      id="info_kontak"
    >
      {infoKontakFields.map((field) => (
        <section key={field.titelKey}>
          <p className="-mb-4 font-light text-gray-400">{field.labelText}</p>
          <Input
            key={field.id}
            handleChange={handleInfoKontakChange}
            value={infoKontak[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        </section>
      ))}
    </ProfileSectionLayout>
  );
};

export default InfoKontak;
