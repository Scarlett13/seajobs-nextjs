import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";

import { FormProvider, useForm } from "react-hook-form";
import ScrollSpy from "react-ui-scrollspy";
import {
  IAmplifyPengalamanKerja,
  IPengalamanKerja,
} from "../../../../constants/profileformconstants/PengalamanKerjaConstants";
import {
  FormFields,
  identitasDiriFields,
  infoKontakFields,
  deskripsiDiriFields,
  tambahPerusahaanFields,
  tambahProyekFields,
  tambahPendidikanSertifikasiFileds,
} from "../../../../constants/profileformconstants/ProfileFormConstants";
import { useUser } from "../../../../contexts/AmplifyAuthContext";
import ProfileMainLayout from "../../../../page_components/profile/layouts/profilemainlayout/ProfileMainLayout";
import DeskripsiDiri from "../../../../page_components/profile/sections/deskripsidiri/DeskripsiDiri";
import IdentitasDiri from "../../../../page_components/profile/sections/identitasdiri/IdentitasDiri";
import InfoKontak from "../../../../page_components/profile/sections/infokontak/InfoKontak";
import RiwayatPendidikan from "../../../../page_components/profile/sections/pendidikan/RiwayatPendidikan";
import TimelinePengalaman from "../../../../page_components/profile/sections/timelinepengalaman/TimelinePengalaman";
import { IPendidikanSertifikasi } from "../../../../constants/profileformconstants/PendidikanSertifikasiConstants";
import MainCtaButton from "../../../../components/buttons/mainctabutton/MainCtaButton";
import usePush from "@utils/UsePush";
import { useRouter } from "next/router";
import {
  CreateTenagaAhliInput,
  CreateTenagaAhliMutation,
  GetTenagaAhliQuery,
  PendidikanByTenagaAhliByCourseQuery,
  PengalamanKerja,
  PengalamanKerjaByTenagaAhliByPerusahaanQuery,
  UpdateTenagaAhliMutation,
} from "../../../../API";
import v4 from "uuid-browser/v4";
import { DateTime } from "luxon";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../../../../graphql/mutations";
import * as queries from "../../../../graphql/queries";

export default function EditProfile() {
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
  const { profile_id } = router.query;

  useEffect(() => {
    if (user) {
      if ((profile_id as string) !== user.getUsername()) {
        push(`/ta/profile/editprofile/${user?.getUsername()}`);
      }
    }
  }, [user]);
  // const [loginState, setLoginState] = useState(fieldsState);
  //end auth context-----

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

  const {
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    setValue,
  } = methods;

  const [submitStatus, setSubmitStatus] = useState(Boolean);

  React.useEffect(() => {
    const getTa = async () => {
      if (!user) {
        return;
      }

      const user2 = await Auth.currentAuthenticatedUser();

      const { attributes } = user2;

      console.log("useraasfafas: ", attributes.email);
      setValue("email", attributes.email);
      setLoading(true);
      const getTa = await API.graphql<GraphQLQuery<GetTenagaAhliQuery>>(
        graphqlOperation(queries.getTenagaAhli, {
          taId: profile_id,
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
          taId: profile_id,
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
          taId: profile_id,
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
  }, [profile_id]);

  const submitListPengalaman = async (data: any) => {
    setLoading(true);
    console.log("wubbalubbasubmitlistpengalaman", data);

    const newTenagaAhli = {
      taId: profile_id as string,
      taFullName: data.fullname,
      taNikPassport: data.ic_number,
      taDob: DateTime.fromISO(new Date(data.dob).toISOString()).toFormat(
        "yyyy-MM-dd"
      ),
      taCitizenship: data.nationality,
      taResidentStatus: data.res_status_id,
      taExpertise: data.keahlian_id.toString(),
      taAddress: data.address,
      taEmail: data.email,
      taPhoneNumber: data.phone_number,
      taPortfolioLink: data.portfolio_link
        ? data.portfolio_link.split(", ")
        : null,
      taSelfDescription: data.deskripsi_diri,
    };

    try {
      const getTa = await API.graphql<GraphQLQuery<GetTenagaAhliQuery>>(
        graphqlOperation(queries.getTenagaAhli, {
          taId: profile_id,
        })
      );

      let newTa;

      if (getTa.data && getTa.data.getTenagaAhli) {
        newTa = await API.graphql<GraphQLQuery<UpdateTenagaAhliMutation>>({
          query: mutations.updateTenagaAhli,
          variables: { input: newTenagaAhli },
        });
      } else {
        newTa = await API.graphql<GraphQLQuery<CreateTenagaAhliMutation>>({
          query: mutations.createTenagaAhli,
          variables: { input: newTenagaAhli },
        });
      }
      setSubmitStatus(true);
      console.log("success submit");
      setLoading(false);
      push(`/ta/profile/${profile_id}`);
    } catch (error) {
      setSubmitStatus(false);
      setLoading(false);
      console.log("error submit: ", error);
    }
  };

  const onSubmit = async (data: any) => {
    // logger({ data }, 'rhf.tsx line 33');
    console.log("submitdata");

    // submitListPengalaman(data);

    // !STARTERCONF Remove console log, use logger instead
    // // eslint-disable-next-line no-console
    // if (data.proyek_selesai && data.proyek_selesai < data.proyek_dimulai) {
    //   return;
    // }
    if (!loading) {
      await submitListPengalaman(data);
    } else {
      console.log("lagi loading");
    }

    return;
  };

  return (
    <ProfileMainLayout user={user}>
      <div className="layout relative flex min-h-screen flex-row justify-center py-12 text-center bg-black ">
        <div className="bg-black lg:w-1/4 mt-4 pr-12 hidden lg:block pl-12">
          <div className="position-relative w-100 sticky top-0">
            <div className=" ps-5 text-white bg-form-bg">
              {/* <h1 className="mb-5">Example Heading</h1> */}
              <div className="border-2 border-black ">
                <a onClick={(e) => onPress(e)} href={"#id_diri"}>
                  <div
                    data-to-scrollspy-id="id_diri"
                    className="text-left pl-4  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center"
                  >
                    Data diri
                  </div>
                </a>
              </div>

              <div className="border-2 border-black ">
                <a onClick={(e) => onPress(e)} href={"#info_kontak"}>
                  <div
                    data-to-scrollspy-id="info_kontak"
                    className="text-left pl-4  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center"
                  >
                    Info kontak
                  </div>
                </a>
              </div>
              <div className="border-2 border-black ">
                <a onClick={(e) => onPress(e)} href={"#deskripsi_diri"}>
                  <div
                    data-to-scrollspy-id="deskripsi_diri"
                    className="text-left pl-4  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center"
                  >
                    Deskripsi diri
                  </div>
                </a>
              </div>
              <div className="border-2 border-black ">
                <a
                  onClick={(e) => onPress(e)}
                  href={"#pengalaman_kerja_dan_proyek"}
                >
                  <div
                    data-to-scrollspy-id="pengalaman_kerja_dan_proyek"
                    className="text-left pl-4  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center"
                  >
                    Pengalaman kerja dan proyek
                  </div>
                </a>
              </div>
              <div className="border-2 border-black ">
                <a onClick={(e) => onPress(e)} href={"#pendidikan_sertifikasi"}>
                  <div
                    data-to-scrollspy-id="pendidikan_sertifikasi"
                    className="text-left pl-4  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center"
                  >
                    Pendidikan dan sertifikasi
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mx-4 mt-4 mb-24 lg:w-6/12 lg:pr-12"
          ref={parentScrollContainerRef}
        >
          <ScrollSpy offsetBottom={100} scrollThrottle={80} useBoxMethod>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w space-y-3 pb-4"
              >
                <IdentitasDiri
                  disabled={false}
                  identitasDiriFields={identitasDiriFieldsComp}
                />
                <InfoKontak
                  disabled={false}
                  infoKontakFields={infoKontakFieldsComp}
                />
                <DeskripsiDiri
                  disabled={false}
                  deskripsiDiriFields={deskripsiDiriFieldsComp}
                  maxChar={200}
                />
                <TimelinePengalaman
                  disabled={false}
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
                  disabled={false}
                  listPendidikan={listPendidikan}
                  setListPendidikan={setListPendidikan}
                  tambahPendidikanFields={tambahPendidikanFieldsComp}
                  listPendidikanFieldsState={listPendidikanState}
                  setListPendidikanFieldsState={setListPendidikanState}
                  taId={profile_id as string}
                />
              </form>
            </FormProvider>
          </ScrollSpy>
          <MainCtaButton
            className="border-1 py-3 my-8 px-6 w-full sm:px-6 bg-main-cta-button-bg rounded font-bold text-black  items-end"
            buttonName="Simpan"
            isLoading={loading}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </ProfileMainLayout>
  );
}

EditProfile.authenticate = true;
