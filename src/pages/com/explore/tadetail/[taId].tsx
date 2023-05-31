import usePush from "@utils/UsePush";
import { API, graphqlOperation } from "aws-amplify";
import { DateTime } from "luxon";
import PageLoader from "next/dist/client/page-loader";
import { useRouter } from "next/router";
import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  GetTenagaAhliQuery,
  PendidikanByTenagaAhliByCourseQuery,
  PengalamanKerja,
  PengalamanKerjaByTenagaAhliByPerusahaanQuery,
} from "../../../../API";
import MainCtaButton from "../../../../components/buttons/mainctabutton/MainCtaButton";

import PrimaryLayout from "../../../../components/layouts/primary/PrimaryLayout";
import { IPendidikanSertifikasi } from "../../../../constants/profileformconstants/PendidikanSertifikasiConstants";
import {
  IAmplifyPengalamanKerja,
  IPengalamanKerja,
} from "../../../../constants/profileformconstants/PengalamanKerjaConstants";
import {
  deskripsiDiriFields,
  FormFields,
  identitasDiriFields,
  infoKontakFields,
  tambahPendidikanSertifikasiFileds,
  tambahPerusahaanFields,
  tambahProyekFields,
} from "../../../../constants/profileformconstants/ProfileFormConstants";
import { useUser } from "../../../../contexts/AmplifyAuthContext";
import ProfileMainLayout from "../../../../page_components/profile/layouts/profilemainlayout/ProfileMainLayout";
import DeskripsiDiri from "../../../../page_components/profile/sections/deskripsidiri/DeskripsiDiri";
import IdentitasDiri from "../../../../page_components/profile/sections/identitasdiri/IdentitasDiri";
import InfoKontak from "../../../../page_components/profile/sections/infokontak/InfoKontak";
import RiwayatPendidikan from "../../../../page_components/profile/sections/pendidikan/RiwayatPendidikan";
import TimelinePengalaman from "../../../../page_components/profile/sections/timelinepengalaman/TimelinePengalaman";
import * as queries from "../../../../graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import ScrollSpy from "react-ui-scrollspy";
import Button from "../../../../components/buttons/custombuttons/Button";

export default function Profile() {
  // const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);
  //begin auth context-------
  const {
    user,
    authenticated,
    setUser,
    setAuthenticated,
    loading,
    setLoading,
  } = useUser();
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

  const push = usePush();
  const router = useRouter();
  const { taId } = router.query;

  //begin section hook for identitas diri section----------
  const identitasDiriFieldsComp = identitasDiriFields;
  let identitasDiriFieldsState: any = {};
  identitasDiriFieldsComp.forEach(
    (field: FormFields) => (identitasDiriFieldsState[field.id] = "")
  );
  //end section hook for identitas diri---------

  //begin section info kontak
  const infoKontakFieldsComp = infoKontakFields;
  let infoKontakFieldsState: any = {};
  infoKontakFieldsComp.forEach(
    (field: FormFields) => (infoKontakFieldsState[field.id] = "")
  );
  //end section info kontak

  //begin section hook deskripsi diri
  const deskripsiDiriFieldsComp = deskripsiDiriFields;
  let deskripsiDiriFieldsState: any = {};
  deskripsiDiriFieldsComp.forEach(
    (field: FormFields) => (deskripsiDiriFieldsState[field.id] = "")
  );
  //end section hook deskripsi diri

  //begin section hook pengalaman kerja

  const [listPengalaman, setListPengalaman] = useState<IPengalamanKerja[]>([]);
  const [listKerja, setListKerja] = useState<IAmplifyPengalamanKerja[]>([]);

  const tambahPerusahaanFieldsComp = tambahPerusahaanFields;
  let tambahPerusahaanFieldsState: any = {};
  tambahPerusahaanFieldsComp.forEach(
    (field: FormFields) => (tambahPerusahaanFieldsState[field.id] = "")
  );

  const [listPerusahaanState, setListPerusahaanState] = useState(
    tambahPerusahaanFieldsState
  );

  const tambahProyekFieldsComp = tambahProyekFields;
  let tambahProyekFieldsState: any = {};
  tambahProyekFieldsComp.forEach(
    (field: FormFields) => (tambahProyekFieldsState[field.id] = "")
  );

  const [listProyekState, setListProyekState] = useState(
    tambahProyekFieldsState
  );

  //end section hook pengalaman kerja

  //begin section hook pendidikan sertifikasi

  const [listPendidikan, setListPendidikan] = useState<
    IPendidikanSertifikasi[]
  >([]);

  const tambahPendidikanFieldsComp = tambahPendidikanSertifikasiFileds;
  let tambahPendidikanFieldsState: any = {};
  tambahPendidikanFieldsComp.forEach(
    (field: FormFields) => (tambahPendidikanFieldsState[field.id] = "")
  );

  const [listPendidikanState, setListPendidikanState] = useState(
    tambahPendidikanFieldsState
  );

  //end section hook pengalaman kerja

  //begin handle untuk onpress sidebar, scrollspy
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      var headerOffset = 20;
      var elementPosition = target.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  //end handle untuk onpress sidebar, scrollspy

  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: "onTouched",
  });

  const { setValue } = methods;

  React.useEffect(() => {
    console.log("router: ", router);
    const getTa = async () => {
      if (!user) {
        return;
      }
      setLoading(true);
      const getTa = await API.graphql<GraphQLQuery<GetTenagaAhliQuery>>(
        graphqlOperation(queries.getTenagaAhli, {
          taId: taId,
        })
      );

      if (getTa.data && getTa.data.getTenagaAhli) {
        const tadob = new Date(getTa.data.getTenagaAhli.taDob);

        setValue("fullname", getTa.data.getTenagaAhli.taFullName);
        setValue("ic_number", getTa.data.getTenagaAhli.taNikPassport);
        setValue("dob", tadob);
        setValue("nationality", getTa.data.getTenagaAhli.taCitizenship);
        setValue("res_status_id", getTa.data.getTenagaAhli.taResidentStatus);
        setValue("deskripsi_diri", getTa.data.getTenagaAhli.taSelfDescription);
        setValue("address", getTa.data.getTenagaAhli.taAddress);
        setValue("email", getTa.data.getTenagaAhli.taEmail);
        setValue("phone_number", getTa.data.getTenagaAhli.taPhoneNumber);
        setValue(
          "portfolio_link",
          getTa.data.getTenagaAhli.taPortfolioLink?.join(", ")
        );
        setValue(
          "keahlian_id",
          getTa.data.getTenagaAhli.taExpertise.split(",")
        );
      }

      const getPend = await API.graphql<
        GraphQLQuery<PendidikanByTenagaAhliByCourseQuery>
      >(
        graphqlOperation(queries.pendidikanByTenagaAhliByCourse, {
          taId: taId,
        })
      );

      if (
        getPend.data &&
        getPend.data.pendidikanByTenagaAhliByCourse &&
        getPend.data.pendidikanByTenagaAhliByCourse.items
      ) {
        setListPendidikan(
          getPend.data.pendidikanByTenagaAhliByCourse
            .items as IPendidikanSertifikasi[]
        );
      }

      const getProjects = await API.graphql<
        GraphQLQuery<PengalamanKerjaByTenagaAhliByPerusahaanQuery>
      >(
        graphqlOperation(queries.pengalamanKerjaByTenagaAhliByPerusahaan, {
          taId: taId,
        })
      );

      if (
        getProjects.data &&
        getProjects.data.pengalamanKerjaByTenagaAhliByPerusahaan &&
        getProjects.data.pengalamanKerjaByTenagaAhliByPerusahaan.items
      ) {
        setListKerja(
          getProjects.data.pengalamanKerjaByTenagaAhliByPerusahaan
            .items as PengalamanKerja[]
        );
      }

      setLoading(false);
    };

    // if (submitStatus) {
    getTa();
    // }
  }, [taId]);

  return (
    <ProfileMainLayout user={user}>
      <div className="layout relative flex min-h-screen flex-row justify-center py-12 text-center bg-white ">
        <div className="bg-white lg:w-1/4 mt-4 pr-12 hidden lg:block pl-12">
          <div className="position-relative w-100 sticky top-0">
            <div className=" ps-5 text-white bg-gray-100">
              {/* <h1 className="mb-5">Example Heading</h1> */}
              <div className="border-2 border-gray-300 ">
                <a onClick={(e) => onPress(e)} href={"#id_diri"}>
                  <div
                    data-to-scrollspy-id="id_diri"
                    className="text-left pl-4  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center text-gray-900"
                  >
                    Data diri
                  </div>
                </a>
              </div>

              <div className="border-2 border-gray-300 ">
                <a onClick={(e) => onPress(e)} href={"#info_kontak"}>
                  <div
                    data-to-scrollspy-id="info_kontak"
                    className="text-left pl-4  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center text-gray-900"
                  >
                    Info kontak
                  </div>
                </a>
              </div>
              <div className="border-2 border-gray-300 ">
                <a onClick={(e) => onPress(e)} href={"#deskripsi_diri"}>
                  <div
                    data-to-scrollspy-id="deskripsi_diri"
                    className="text-left pl-4  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center text-gray-900"
                  >
                    Deskripsi diri
                  </div>
                </a>
              </div>
              <div className="border-2 border-gray-300 ">
                <a
                  onClick={(e) => onPress(e)}
                  href={"#pengalaman_kerja_dan_proyek"}
                >
                  <div
                    data-to-scrollspy-id="pengalaman_kerja_dan_proyek"
                    className="text-left pl-4  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center text-gray-900"
                  >
                    Pengalaman kerja dan proyek
                  </div>
                </a>
              </div>
              <div className="border-2 border-gray-300 ">
                <a onClick={(e) => onPress(e)} href={"#pendidikan_sertifikasi"}>
                  <div
                    data-to-scrollspy-id="pendidikan_sertifikasi"
                    className="text-left pl-4  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center text-gray-900"
                  >
                    Pendidikan dan sertifikasi
                  </div>
                </a>
              </div>
            </div>
            <Button
              className="w-full mt-8 border-gray-400 text-red-400 hover:text-red-500"
              onClick={() => router.back()}
            >
              Kembali ke halaman sebelumnya
            </Button>
          </div>
        </div>

        <div
          className="mx-4 mt-4 mb-24 lg:w-6/12 lg:pr-12"
          ref={parentScrollContainerRef}
        >
          <ScrollSpy offsetBottom={100} scrollThrottle={80} useBoxMethod>
            <FormProvider {...methods}>
              <form className="max-w space-y-3 pb-4">
                <IdentitasDiri
                  disabled={true}
                  identitasDiriFields={identitasDiriFieldsComp}
                />
                <InfoKontak
                  disabled={true}
                  infoKontakFields={infoKontakFieldsComp}
                />
                <DeskripsiDiri
                  disabled={true}
                  deskripsiDiriFields={deskripsiDiriFieldsComp}
                  maxChar={200}
                />
                <TimelinePengalaman
                  disabled={true}
                  listPengalaman={listPengalaman}
                  setListPengalaman={setListPengalaman}
                  tambahPerusahaanFields={tambahPerusahaanFieldsComp}
                  listPengalamanFieldsState={listPerusahaanState}
                  setListPengalamanFieldsState={setListPerusahaanState}
                  tambahProyekFields={tambahProyekFieldsComp}
                  listProyekFieldsState={listProyekState}
                  setListProyekFieldsState={setListProyekState}
                  setListKerja={setListKerja}
                  listKerja={listKerja}
                />
                <RiwayatPendidikan
                  disabled={true}
                  listPendidikan={listPendidikan}
                  setListPendidikan={setListPendidikan}
                  tambahPendidikanFields={tambahPendidikanFieldsComp}
                  listPendidikanFieldsState={listPendidikanState}
                  setListPendidikanFieldsState={setListPendidikanState}
                  taId={taId as string}
                />
              </form>
            </FormProvider>
          </ScrollSpy>
        </div>
      </div>
    </ProfileMainLayout>
  );
}

Profile.authenticate = true;
// Dashboard.getLayout = (page: any) => {
//   return (
//     <>
//       <PrimaryLayout>{page}</PrimaryLayout>
//     </>
//   );
// };
