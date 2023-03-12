import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";

import Sidebar from "../../../components/navigation/sidebar/Sidebar";
import ScrollSpy from "react-ui-scrollspy";
import { IPengalamanKerja } from "../../../constants/profileformconstants/PengalamanKerjaConstants";
import {
  FormFields,
  IBidangKeahlian,
  identitasDiriFields,
  infoKontakFields,
  deskripsiDiriFields,
  tambahPerusahaanFields,
  tambahProyekFields,
  tambahPendidikanSertifikasiFileds,
} from "../../../constants/profileformconstants/ProfileFormConstants";
import { useUser } from "../../../contexts/AmplifyAuthContext";
import ProfileMainLayout from "../../../page_components/profile/layouts/profilemainlayout/ProfileMainLayout";
import DeskripsiDiri from "../../../page_components/profile/sections/deskripsidiri/DeskripsiDiri";
import IdentitasDiri from "../../../page_components/profile/sections/identitasdiri/IdentitasDiri";
import InfoKontak from "../../../page_components/profile/sections/infokontak/InfoKontak";
import RiwayatPendidikan from "../../../page_components/profile/sections/pendidikan/RiwayatPendidikan";
import TimelinePengalaman from "../../../page_components/profile/sections/timelinepengalaman/TimelinePengalaman";
import { IPendidikanSertifikasi } from "../../../constants/profileformconstants/PendidikanSertifikasiConstants";

export default function EditProfile() {
  // const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);
  //begin auth context-------
  const { user, authenticated, setUser, setAuthenticated } = useUser();
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("user effect login: ", user);
    console.log("auth effect login: ", authenticated);
    if (!authenticated) {
      // push("/login");
    }
  }, [user, authenticated]);
  // const [loginState, setLoginState] = useState(fieldsState);
  //end auth context-----

  //begin section hook for identitas diri section----------
  const identitasDiriFieldsComp = identitasDiriFields;
  let identitasDiriFieldsState: any = {};
  identitasDiriFieldsComp.forEach(
    (field: FormFields) => (identitasDiriFieldsState[field.id] = "")
  );

  const [identitasDiriState, setIdentitasDiriState] = useState(
    identitasDiriFieldsState
  );

  const [selectedKeahlian, setSelectedKeahlian] = useState<IBidangKeahlian[]>(
    []
  );
  //end section hook for identitas diri---------

  //begin section info kontak
  const infoKontakFieldsComp = infoKontakFields;
  let infoKontakFieldsState: any = {};
  infoKontakFieldsComp.forEach(
    (field: FormFields) => (infoKontakFieldsState[field.id] = "")
  );

  const [infoKontakState, setInfoKontakState] = useState(infoKontakFieldsState);
  //end section info kontak

  //begin section hook deskripsi diri
  const deskripsiDiriFieldsComp = deskripsiDiriFields;
  let deskripsiDiriFieldsState: any = {};
  deskripsiDiriFieldsComp.forEach(
    (field: FormFields) => (deskripsiDiriFieldsState[field.id] = "")
  );

  const [deskripsiDiriState, setDeskripsiDiriState] = useState(
    deskripsiDiriFieldsState
  );
  //end section hook deskripsi diri

  //begin section hook pengalaman kerja

  const [listPengalaman, setListPengalaman] = useState<IPengalamanKerja[]>([]);

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
            <IdentitasDiri
              selectedKeahlian={selectedKeahlian}
              setSelectedKeahlian={setSelectedKeahlian}
              identitasDiri={identitasDiriState}
              setIdentitasDiri={setIdentitasDiriState}
              identitasDiriFields={identitasDiriFieldsComp}
            />
            <InfoKontak
              infoKontak={infoKontakState}
              setInfoKontak={setInfoKontakState}
              infoKontakFields={infoKontakFieldsComp}
            />
            <DeskripsiDiri
              deskripsiDiri={deskripsiDiriState}
              setDeskripsiDiri={setDeskripsiDiriState}
              deskripsiDiriFields={deskripsiDiriFieldsComp}
            />
            <TimelinePengalaman
              listPengalaman={listPengalaman}
              setListPengalaman={setListPengalaman}
              tambahPerusahaanFields={tambahPerusahaanFieldsComp}
              listPengalamanFieldsState={listPerusahaanState}
              setListPengalamanFieldsState={setListPerusahaanState}
              tambahProyekFields={tambahProyekFieldsComp}
              listProyekFieldsState={listProyekState}
              setListProyekFieldsState={setListProyekState}
            />
            <RiwayatPendidikan
              listPengalaman={listPendidikan}
              setListPengalaman={setListPendidikan}
              tambahPerusahaanFields={tambahPendidikanFieldsComp}
              listPengalamanFieldsState={listPendidikanState}
              setListPengalamanFieldsState={setListPendidikanState}
            />
          </ScrollSpy>
        </div>
      </div>
    </ProfileMainLayout>
  );
}

EditProfile.authenticate = true;
