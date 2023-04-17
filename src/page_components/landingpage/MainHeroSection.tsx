import usePush from "@utils/UsePush";
import MainCtaButton from "../../components/buttons/mainctabutton/MainCtaButton";
import { useUser } from "../../contexts/AmplifyAuthContext";

const MainHeroSection = () => {
  const push = usePush();
  const { isTa } = useUser();
  return (
    <>
      <section
        className={`w-full h-screen flex flex-col items-center  overflow-hidden  bg-no-repeat bg-cover backdrop-blur-sm ${
          isTa ? "bg-hero1-bg text-white" : "bg-hero2-bg text-black"
        }`}
      >
        <main className="w-full h-screen  lg:w-100 backdrop-blur-sm">
          <div className=" relative mt-20 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <h1
                  className={`text-xl xl:text-9xl tracking-tight font-extrabold md:text-6xl ${
                    isTa ? "text-white" : "text-black"
                  }`}
                >
                  <span
                    className={`block xl:inline ${
                      isTa ? "text-white" : "text-black"
                    }`}
                  >
                    {`Temukan ${isTa ? "proyek" : "tenaga ahli"}`}
                  </span>

                  <span className="block  xl:inline">yang sesuai dengan </span>

                  <span className="block  xl:inline">
                    {`${isTa ? "keahlianmu" : "kebutuhan proyekmu"}`}{" "}
                  </span>
                </h1>
                <p
                  className={`mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ${
                    isTa ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  {`${
                    isTa
                      ? "Ratusan konsultan dan kontraktor mencari tenaga ahli untuk beragam proyek. Tingkatkan peluang karirmu dengan mendaftar sebagai tenaga ahli di"
                      : "Jelajahi ratusan tenaga ahli yang siap untuk mengerjakan beragam proyek. Daftarkan proyek di perusahaanmu untuk mendapatkan tenaga ahli di"
                  }`}{" "}
                  <a
                    className="decoration-4 text-main-cta-button-bg  font-bold"
                    href="#"
                  >
                    SeaJobs.
                  </a>
                </p>

                <MainCtaButton
                  className="border-1 py-3 my-8 px-6 sm:px-6 bg-main-cta-button-bg rounded font-bold text-black w-30 "
                  buttonName="Daftar sekarang"
                  onClick={() => {
                    isTa ? push("ta/signup") : push("com/signup");
                  }}
                />
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

export default MainHeroSection;
