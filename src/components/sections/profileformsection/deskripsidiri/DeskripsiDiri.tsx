import { Listbox } from "@headlessui/react";
import React, { useState } from "react";
import { deskripsiDiriFields } from "../../../../constants/profileformconstants/ProfileFormConstants";
import Input from "../../../inputs/reguler/InputTemplate";
import TextArea from "../../../inputs/textarea/TextArea";
import ProfileSectionLayout from "../../../layouts/profilesectionlayout/ProfileSectionLayout";
// import styles from "./DeskripsiDiri.module.css";

export interface IDeskripsiDiri {
  deskripsiDiri: any;
  setDeskripsiDiri: React.Dispatch<React.SetStateAction<any>>;
  deskripsiDiriFields: typeof deskripsiDiriFields;
  maxChar?: number;
}

const DeskripsiDiri: React.FC<IDeskripsiDiri> = ({
  deskripsiDiri,
  setDeskripsiDiri,
  deskripsiDiriFields,
  maxChar,
}) => {
  const [error, setError] = useState<boolean>(false);

  const handleDeskripsiDiriChange = (e: {
    target: { id: any; value: any };
  }) => {
    //TODO: validation check
    console.log(e.target.value.length);
    if (
      e.target.value.length >= (maxChar ? maxChar : 10) ||
      e.target.value.length === 0
    ) {
      setError(true);
    } else {
      setError(false);
    }
    setDeskripsiDiri({ ...deskripsiDiri, [e.target.id]: e.target.value });
  };

  return (
    <ProfileSectionLayout
      isRequired={true}
      title="deskripsi diri"
      id="deskripsi_diri"
    >
      {deskripsiDiriFields.map((field) => (
        <section key={field.titelKey}>
          <p className="-mb-4 font-light text-gray-400">{field.labelText}</p>
          <TextArea
            key={field.id}
            handleChange={handleDeskripsiDiriChange}
            value={deskripsiDiri[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            helperText={"disini helper"}
            maxLength={field.maxChar ? field.maxChar : 10}
            // customClass="resize-none"
          />
          <p className={`-mt-4 text-right font-light text-sm text-gray-400 `}>
            {`Karakter tersisa: ${
              (field.maxChar ? field.maxChar : 10) -
              deskripsiDiri[field.id].length
            }`}
          </p>
        </section>
      ))}
    </ProfileSectionLayout>
  );
};

export default DeskripsiDiri;
