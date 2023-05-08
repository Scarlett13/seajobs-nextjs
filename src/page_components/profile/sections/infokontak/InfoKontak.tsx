import { Listbox } from "@headlessui/react";
import Input from "../../../../components/forms/Input";
import { infoKontakFields } from "../../../../constants/profileformconstants/ProfileFormConstants";
import ProfileSectionLayout from "../../layouts/profilesectionlayout/ProfileSectionLayout";
// import styles from "./InfoKontak.module.css";

export interface IInfoKontak {
  infoKontakFields: typeof infoKontakFields;
  disabled: boolean;
}

const InfoKontak: React.FC<IInfoKontak> = ({ infoKontakFields, disabled }) => {
  return (
    <ProfileSectionLayout
      isRequired={true}
      title="info kontak"
      id="info_kontak"
      disabled={disabled}
    >
      {infoKontakFields.map((field) => {
        if (field.type === "email") {
          return (
            <section key={field.titelKey} className={"mb-4"}>
              <p className="mb-2 font-light text-gray-400">{field.labelText}</p>
              <Input
                isTa={true}
                id={field.id}
                type={field.type}
                label={null}
                disabled={true}
                validation={{
                  required: {
                    value: field.isRequired,
                    message: `${field.labelText} harus di isi!`,
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi,
                    message: "email tidak valid",
                  },
                }}
                placeholder={field.placeholder}
                helperText={undefined}
              />
            </section>
          );
        } else if (field.type === "tel") {
          return (
            <section key={field.titelKey} className={"mb-4"}>
              <p className="mb-2 font-light text-gray-400">{field.labelText}</p>
              <Input
                isTa={true}
                id={field.id}
                type={field.type}
                disabled={disabled}
                label={null}
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
        } else {
          return (
            <section key={field.titelKey} className={"mb-4"}>
              <p className="mb-2 font-light text-gray-400">{field.labelText}</p>
              <Input
                isTa={true}
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

export default InfoKontak;
