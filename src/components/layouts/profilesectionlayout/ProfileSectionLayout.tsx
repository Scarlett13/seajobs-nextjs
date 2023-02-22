// import styles from "./ProfileSectionLayout.module.css";

export interface IProfileSectionLayout {
  children?: any;
  title: string;
  isRequired: boolean;
  canBeAdded?: boolean;
  id: string;
}

const ProfileSectionLayout: React.FC<IProfileSectionLayout> = ({
  children,
  title,
  isRequired,
  canBeAdded,
  id,
}) => {
  return (
    <section id={id}>
      <main className="bg-form-bg shadow-md px-8 pt-6 mb-4 pb-4 flex flex-col justify-center">
        <div className="mb-4 flow-root">
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
          <div className="float-right">
            <button
              className={`text-form-section-blue text-3xl -mt-1 font-medium uppercase ml-2  ${
                canBeAdded ? "visible" : "invisible"
              }`}
            >
              +
            </button>
          </div>
        </div>

        {children}
      </main>
    </section>
  );
};

export default ProfileSectionLayout;
