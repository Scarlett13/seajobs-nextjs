import React, { useEffect, useState } from "react";
import ProfileMainLayout from "../../../components/layouts/profilemainlayout/ProfileMainLayout";

import Sidebar from "../../../components/navigation/sidebar/Sidebar";
import DeskripsiDiri from "../../../components/sections/profileformsection/deskripsidiri/DeskripsiDiri";
import IdentitasDiri from "../../../components/sections/profileformsection/identitasdiri/IdentitasDiri";
import InfoKontak from "../../../components/sections/profileformsection/infokontak/InfoKontak";
import TimelinePengalaman from "../../../components/sections/profileformsection/timelinepengalaman/TimelinePengalaman";
import { IPengalamanKerja } from "../../../constants/profileformconstants/PengalamanKerjaConstants";
import {
  FormFields,
  IBidangKeahlian,
  identitasDiriFields,
  infoKontakFields,
  deskripsiDiriFields,
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

  const [identitasDiri, setIdentitasDiri] = useState(identitasDiriFieldsState);

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

  const [infoKontak, setInfoKontak] = useState(infoKontakFieldsState);
  //end section info kontak

  //begin section hook deskripsi diri
  const deskripsiDiriFieldsComp = deskripsiDiriFields;
  let deskripsiDiriFieldsState: any = {};
  deskripsiDiriFieldsComp.forEach(
    (field: FormFields) => (deskripsiDiriFieldsState[field.id] = "")
  );

  const [deskripsiDiri, setDeskripsiDiri] = useState(deskripsiDiriFieldsState);
  //end section hook deskripsi diri

  const listPengalaman: IPengalamanKerja[] = require("../../../constants/profileformconstants/pengalaman_kerja.json");

  // console.log(listPengalaman);

  //handle untuk onpress sidebar, scrollspy
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log("pressed");
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

  return (
    <ProfileMainLayout user={user}>
      <div className="flex bg-black">
        <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
          <div className="p-4">
            <IdentitasDiri
              selectedKeahlian={selectedKeahlian}
              setSelectedKeahlian={setSelectedKeahlian}
              identitasDiri={identitasDiri}
              setIdentitasDiri={setIdentitasDiri}
              identitasDiriFields={identitasDiriFieldsComp}
            />
            <InfoKontak
              infoKontak={infoKontak}
              setInfoKontak={setInfoKontak}
              infoKontakFields={infoKontakFieldsComp}
            />
            <DeskripsiDiri
              deskripsiDiri={deskripsiDiri}
              setDeskripsiDiri={setDeskripsiDiri}
              deskripsiDiriFields={deskripsiDiriFieldsComp}
            />
            <TimelinePengalaman listPengalaman={listPengalaman} />
          </div>
        </main>
        <div className="order-1 bg-black">
          <Sidebar>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  onClick={(e: any) => onPress(e)}
                  href={"#id_diri"}
                  icon={null}
                  data-to-scrollspy-id="id_diri"
                >
                  Identitas diri
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  onClick={(e: any) => onPress(e)}
                  href={"#info_kontak"}
                  icon={null}
                  data-to-scrollspy-id="info_kontak"
                >
                  Info kontak
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  onClick={(e: any) => onPress(e)}
                  href={"#deskripsi_diri"}
                  icon={null}
                  data-to-scrollspy-id="deskripsi_diri"
                >
                  Deskripsi diri
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  onClick={(e: any) => onPress(e)}
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
