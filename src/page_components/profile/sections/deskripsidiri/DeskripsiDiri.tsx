import { Listbox } from "@headlessui/react";
import React, { useState } from "react";
import TextArea from "../../../../components/forms/TextArea";
import { deskripsiDiriFields } from "../../../../constants/profileformconstants/ProfileFormConstants";
import ProfileSectionLayout from "../../layouts/profilesectionlayout/ProfileSectionLayout";
// import styles from "./DeskripsiDiri.module.css";

export interface IDeskripsiDiri {
  deskripsiDiriFields: typeof deskripsiDiriFields;
  maxChar?: number;
  disabled: boolean;
}

const DeskripsiDiri: React.FC<IDeskripsiDiri> = ({
  deskripsiDiriFields,
  maxChar,
  disabled,
}) => {
  return (
    <ProfileSectionLayout
      disabled={disabled}
      isRequired={true}
      title="deskripsi diri"
      id="deskripsi_diri"
    >
      {deskripsiDiriFields.map((field) => (
        <section key={field.titelKey}>
          <p className="mb-4 font-light text-gray-400">{field.labelText}</p>
          <TextArea
            isTa={true}
            id={field.id}
            label={null}
            disabled={disabled}
            validation={
              field.isRequired === true
                ? { required: "Deskripsi diri harus di isi!" }
                : undefined
            }
            maxLength={maxChar}
          />
        </section>
      ))}
    </ProfileSectionLayout>
  );
};

export default DeskripsiDiri;
