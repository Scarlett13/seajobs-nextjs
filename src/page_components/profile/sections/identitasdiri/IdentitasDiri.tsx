import { Listbox } from "@headlessui/react";
import {
  IBidangKeahlian,
  identitasDiriFields,
} from "../../../../constants/profileformconstants/ProfileFormConstants";
import ProfileSectionLayout from "../../layouts/profilesectionlayout/ProfileSectionLayout";
import SearchableSelectInput from "../../../../components/forms/SearchableSelectInput";
import DatePicker from "../../../../components/forms/DatePicker";
import Input from "../../../../components/forms/Input";
import TextArea from "../../../../components/forms/TextArea";
// import styles from "./IdentitasDiri.module.css";

export interface IIdentitasDiri {
  identitasDiriFields: typeof identitasDiriFields;
  disabled: boolean;
}

const IdentitasDiri: React.FC<IIdentitasDiri> = ({
  identitasDiriFields,
  disabled,
}) => {
  const dataKeahlian = require("../../../../constants/profileformconstants/bidang_keahlian.json");
  const residentStatus = require("../../../../constants/profileformconstants/resident_status.json");

  return (
    <ProfileSectionLayout
      isRequired={true}
      title="data diri"
      id="id_diri"
      disabled={disabled}
    >
      {identitasDiriFields.map((field) => {
        if (field.type === "bidang_keahlian") {
          return (
            <section key={field.titelKey} className="mb-4">
              <p className="mb-2 font-light text-gray-400">{field.labelText}</p>
              <SearchableSelectInput
                id={field.id}
                placeholder="Pilih keahlian"
                options={dataKeahlian}
                disabled={disabled}
                validation={
                  field.isRequired === true
                    ? { required: "Select Input must be filled" }
                    : undefined
                }
                label={null}
                isMulti={true}
              />
            </section>
          );
        } else if (field.type === "date") {
          return (
            <section key={field.titelKey} className={"mb-4"}>
              <p className="mb-2 font-light text-gray-400">{field.labelText}</p>
              <DatePicker
                id={field.id}
                label={null}
                disabled={disabled}
                validation={{
                  required: "Date must be filled",
                  valueAsDate: false,
                }}
                placeholder="dd/mm/yyyy"
              />
            </section>
          );
        } else if (field.type === "text_area") {
          return (
            <section key={field.titelKey} className={"mb-4"}>
              <p className="mb-2 font-light text-gray-400">{field.labelText}</p>
              <TextArea
                id={field.id}
                label={null}
                disabled={disabled}
                validation={
                  field.isRequired === true
                    ? { required: "Select Input must be filled" }
                    : undefined
                }
                placeholder={field.placeholder}
                maxLength={200}
              />
            </section>
          );
        } else if (field.type === "resident_status") {
          return (
            <section key={field.titelKey} className="mb-4">
              <p className="mb-2 font-light text-gray-400">{field.labelText}</p>
              <SearchableSelectInput
                id={field.id}
                placeholder={field.placeholder}
                options={residentStatus}
                disabled={disabled}
                validation={
                  field.isRequired === true
                    ? { required: "Select Input must be filled" }
                    : undefined
                }
                label={null}
                isMulti={false}
              />
            </section>
          );
        } else {
          return (
            <section key={field.titelKey} className={"mb-4"}>
              <p className="mb-2 font-light text-gray-400">{field.labelText}</p>
              <Input
                id={field.id}
                type={field.type}
                label={null}
                disabled={disabled}
                validation={{
                  required: {
                    value: field.isRequired,
                    message: `${field.labelText} harus di isi!`,
                  },
                }}
                placeholder={field.placeholder}
                helperText={undefined}
              />
            </section>
          );
        }
      })}
    </ProfileSectionLayout>
  );
};

export default IdentitasDiri;
