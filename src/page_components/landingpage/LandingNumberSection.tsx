import usePush from "@utils/UsePush";
import MainCtaButton from "../../components/buttons/mainctabutton/MainCtaButton";
import { useUser } from "../../contexts/AmplifyAuthContext";

const LandingNumberSection = () => {
  const push = usePush();
  const { isTa } = useUser();
  return (
    <>
      <section
        className={`w-full h-screen flex flex-col items-center  overflow-hidden  bg-no-repeat bg-cover ${
          isTa ? "text-white bg-hero-bg" : "text-black bg-white"
        }`}
      >
        <main className="mx-auto max-w-7xl lg:w-100">
          <div className="h-screen grid grid-cols-1">
            <dl className="grid grid-cols- gap-x-8 gap-y-10">
              <div className="place-self-center">
                <h1
                  className={`text-5xl tracking-tight font-extrabold sm:text-2xl md:text-4xl ${
                    isTa ? "text-white" : "text-black"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center ${
                      isTa ? "text-white" : "text-black"
                    } `}
                  >
                    Sudah ada
                  </span>
                </h1>
                <p
                  className={`mt-10 text-7xl font-bold  flex items-center justify-center ${
                    isTa ? "text-white" : "text-black"
                  }`}
                >
                  {`${isTa ? "150 proyek" : "365 tenaga ahli"}`}
                </p>
                <p
                  className={`mt-10 text-base sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl  flex text-center justify-center ${
                    isTa ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  {`${
                    isTa
                      ? "yang siap berkontribusi dengan perusahaanmu. Jadilah salah satu bagian dari tenaga ahli yang mendapatkan peluang proyek impianmu."
                      : "yang siap berkontribusi dengan perusahaanmu. Buka peluang kolaborasi bersama tenaga ahli terbaik untuk proyek perusahaanmu."
                  }`}
                </p>
                <div className="mt-10 flex items-center justify-center">
                  <MainCtaButton
                    className=" border-1 py-3 my-8 px-6 sm:px-6 bg-main-cta-button-bg rounded font-bold text-black w-30 "
                    buttonName="Daftar sekarang"
                    onClick={() => {
                      isTa ? push("ta/signup") : push("com/signup");
                    }}
                  />
                </div>
              </div>
              {/* <div className="relative">
                <div className="lg:shrink-0 lg:relative">
                  <div className="lg:relative md:relative lg:w-[170%]">
                    <img
                      className="w-full md:relative lg:absolute bg-hero1-bg"
                      style={{ display: "block" }}
                      alt=""
                    />
                  </div>
                </div>
              </div> */}
            </dl>
          </div>
        </main>
      </section>
    </>
  );
};

export default LandingNumberSection;
