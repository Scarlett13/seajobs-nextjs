import { useUser } from "../../../../contexts/AmplifyAuthContext";
import ProfileSectionLayout from "../../layouts/profilesectionlayout/ProfileSectionLayout";
import DropzoneInput from "../../../../components/forms/DropzoneInput";

export interface IUploadSka {
  disabled: boolean;
}

const UploadSka: React.FC<IUploadSka> = ({ disabled }) => {
  const { isTa } = useUser();

  return (
    <ProfileSectionLayout
      disabled={disabled}
      isRequired={false}
      title="upload ska"
      id="uploadska"
      isTa={isTa}
    >
      <div className="text-white pt-4 pb-2">
        <DropzoneInput
          id="ska"
          label=""
          accept={{ "application/pdf": [".pdf"] }}
          helperText="You can upload file with .pdf extension."
        />
      </div>
    </ProfileSectionLayout>
  );
};

export default UploadSka;
