import MainCtaButton from "../../components/buttons/mainctabutton/MainCtaButton";

const MainHeroSection = () => {
  return (
    <>
      <section className="w-full h-screen flex flex-col items-center text-white overflow-hidden bg-hero1-bg bg-no-repeat bg-cover">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-20 lg:w-100">
          <div className="mt-10 relative">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <h1 className="text-9xl tracking-tight font-extrabold sm:text-4xl md:text-6xl text-white">
                  <span className="block xl:inline text-white">
                    Temukan proyek{" "}
                  </span>

                  <span className="block  xl:inline">yang sesuai dengan </span>

                  <span className="block  xl:inline">keahlianmu </span>
                </h1>
                <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-gray-300">
                  Ratusan konsultan dan kontraktor mencari tenaga ahli untuk
                  beragam proyek. Tingkatkan peluang karirmu dengan mendaftar
                  sebagai tenaga ahli di{" "}
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
