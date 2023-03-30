export interface IProfileSectionLayout {
  children?: any;
}

const ExploreSectionLayout: React.FC<IProfileSectionLayout> = ({
  children,
}) => {
  return (
    <section id={"explore_section"}>
      <div className="bg-black shadow-md mb-4 pb-4 text-left">{children}</div>
    </section>
  );
};

export default ExploreSectionLayout;
