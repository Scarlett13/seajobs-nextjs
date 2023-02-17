// import styles from "./ProfileSectionLayout.module.css";

export interface IProfileSectionLayout {
  children?: any;
  title: string;
  isRequired: boolean;
}

const ProfileSectionLayout: React.FC<IProfileSectionLayout> = ({
  children,
  title,
  isRequired,
}) => {
  return (
    <section>
      <main className="bg-form-bg shadow-md px-8 pt-6 mb-4 pb-4 flex flex-col justify-center">
        <div className="mb-4">
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

        {children}
      </main>
    </section>
  );
};

export default ProfileSectionLayout;
