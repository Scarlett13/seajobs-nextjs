import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import ProfileMainLayout from "../layouts/profilemainlayout/ProfileMainLayout";

import Sidebar from "../../../components/navigation/sidebar/Sidebar";
import DeskripsiDiri from "../sections/profileformsection/deskripsidiri/DeskripsiDiri";
import IdentitasDiri from "../sections/profileformsection/identitasdiri/IdentitasDiri";
import InfoKontak from "../sections/profileformsection/infokontak/InfoKontak";
import TimelinePengalaman from "../sections/profileformsection/timelinepengalaman/TimelinePengalaman";
import { IPengalamanKerja } from "../../../constants/profileformconstants/PengalamanKerjaConstants";
import {
  FormFields,
  IBidangKeahlian,
  identitasDiriFields,
  infoKontakFields,
  deskripsiDiriFields,
  tambahPerusahaanFields,
  tambahProyekFields,
} from "../../../constants/profileformconstants/ProfileFormConstants";
import { useUser } from "../../../contexts/AmplifyAuthContext";

export default function EditProfile() {
  // const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);
  //begin auth context-------
  const { user, authenticated, setUser, setAuthenticated } = useUser();

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
  // const listPengalamanDummy: IPengalamanKerja[] = require("../../../constants/profileformconstants/pengalaman_kerja.json");

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

  // console.log(listPengalaman);

  //begin handle untuk onpress sidebar, scrollspy
  const onScrollSpyPressed = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
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
      <div className="flex justify-between bg-black ">
        <main className="order-4 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
          <div className="p-4">
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
          </div>
        </main>
        <div className="order-2 bg-black lg:ml-96">
          <Sidebar>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  onClick={(e: any) => onScrollSpyPressed(e)}
                  href={"#id_diri"}
                  icon={null}
                  data-to-scrollspy-id="id_diri"
                >
                  Identitas diri
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  onClick={(e: any) => onScrollSpyPressed(e)}
                  href={"#info_kontak"}
                  icon={null}
                  data-to-scrollspy-id="info_kontak"
                >
                  Info kontak
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  onClick={(e: any) => onScrollSpyPressed(e)}
                  href={"#deskripsi_diri"}
                  icon={null}
                  data-to-scrollspy-id="deskripsi_diri"
                >
                  Deskripsi diri
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  onClick={(e: any) => onScrollSpyPressed(e)}
                  href={"#pengalaman_kerja_dan_proyek"}
                  icon={null}
                  data-to-scrollspy-id="pengalaman_kerja_dan_proyek"
                >
                  Pengalaman kerja dan proyek
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      </div>
    </ProfileMainLayout>
  );
}

EditProfile.authenticate = true;
