import React, { useEffect, useState } from "react";

import { useUser } from "../../contexts/AmplifyAuthContext";
import usePush from "@utils/UsePush";
import ProfileSectionLayout from "../../components/layouts/profilesectionlayout/ProfileSectionLayout";
import Input from "../../components/inputs/reguler/InputTemplate";
import IdentitasDiri from "../../components/sections/profileformsection/identitasdiri/IdentitasDiri";
import {
  FormFields,
  IBidangKeahlian,
  identitasDiriFields,
} from "../../constants/profileformconstants/ProfileFormConstants";

export default function Dashboard() {
  //identitas diri hook state
  const identitasDiriFieldsComp = identitasDiriFields;
  let identitasDiriFieldsState: any = {};
  identitasDiriFieldsComp.forEach(
    (field: FormFields) => (identitasDiriFieldsState[field.id] = "")
  );

  const push = usePush();
  // const { user, redirectTo, authenticated } = useAuth();
  const { user, authenticated, setUser, setAuthenticated } = useUser();

  const [selectedKeahlian, setSelectedKeahlian] = useState<IBidangKeahlian[]>(
    []
  );

  const [identitasDiri, setIdentitasDiri] = useState(identitasDiriFieldsState);

  // const [loginState, setLoginState] = useState(fieldsState);

  useEffect(() => {
    console.log("user effect login: ", user);
    console.log("auth effect login: ", authenticated);
    if (!authenticated) {
      // push("/login");
    }
  }, [user, authenticated]);

  return (
    // <PrimaryLayout user={user}>
    //   <main classNameName="bg-gray-200 h-screen flex flex-col items-center justify-center">
    //     <p classNameName="text-xl mb-4">
    //       {/* Welcome, your email is {user.attributes.email} */}
    //     </p>

    //     <button
    //       classNameName="mt-2 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md"
    //       onClick={async () => {
    //         await Auth.signOut();
    //         setUser(null);
    //         setAuthenticated(false);
    //       }}
    //     >
    //       Log out
    //     </button>
    //   </main>
    // </PrimaryLayout>
    <>
      <IdentitasDiri
        selectedKeahlian={selectedKeahlian}
        setSelectedKeahlian={setSelectedKeahlian}
        identitasDiri={identitasDiri}
        setIdentitasDiri={setIdentitasDiri}
        identitasDiriFields={identitasDiriFieldsComp}
      />
      <IdentitasDiri
        selectedKeahlian={selectedKeahlian}
        setSelectedKeahlian={setSelectedKeahlian}
        identitasDiri={identitasDiri}
        setIdentitasDiri={setIdentitasDiri}
        identitasDiriFields={identitasDiriFieldsComp}
      />
    </>
  );
}

Dashboard.authenticate = false;
