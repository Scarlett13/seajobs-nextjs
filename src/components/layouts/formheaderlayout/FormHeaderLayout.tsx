import Link from "next/link";

export interface IFormHeaderLayout {
  heading?: string;
  paragraph?: string;
  linkName?: string;
  linkUrl?: any;
  children?: any;
}

const FormHeaderLayout: React.FC<IFormHeaderLayout> = ({
  heading,
  paragraph,
  linkUrl,
  linkName,
  children,
}) => {
  return (
    <div className=" text-white min-h-screen  place-items-center hero mx-auto pb-10 flex justify-center bg-hero1-bg bg-no-repeat bg-cover">
      {/* <div className="flex justify-center">
        <img
          alt=""
          className="h-14 w-14"
          src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"
        />
      </div> */}
      {/* ganti kalau mau centered item ketengah */}
      {/* <div className="lg:-mt-96 -mt-72  w-3/4 md:w-2/4 lg:w-1/4"></div> */}
      <div className="bg-form-bg shadow-md rounded px-8 pt-6 mb-4 pb-10 w-fit md:w-3/4 lg:w-2/5 xl:w-1/4">
        <h2 className="text-center text-3xl font-extrabold text-white">
          {heading}
        </h2>
        {children}
        <div className="text-center text-sm text-white mt-10">
          {paragraph}{" "}
          <Link
            href={linkUrl ? linkUrl : "/"}
            className="font-medium text-main-cta-button-bg hover:main-cta-button-bg"
          >
            {linkName}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormHeaderLayout;
