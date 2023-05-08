export interface IProfileSectionLayout {
  children?: any;
  isTa: boolean;
}

const ExploreSectionLayout: React.FC<IProfileSectionLayout> = ({
  children,
  isTa,
}) => {
  return (
    <section id={"explore_section"}>
      <div className={`${isTa ? "bg-black" : "bg-white"}  mb-4 pb-4 text-left`}>
        {children}
      </div>
    </section>
  );
};

export default ExploreSectionLayout;
