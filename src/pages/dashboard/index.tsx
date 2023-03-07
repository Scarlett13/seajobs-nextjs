import React, { useEffect, useRef, useState } from "react";

import { useUser } from "../../contexts/AmplifyAuthContext";
import usePush from "@utils/UsePush";
import {
  FormFields,
  IBidangKeahlian,
  identitasDiriFields,
  infoKontakFields,
} from "../../constants/profileformconstants/ProfileFormConstants";
import PrimaryLayout from "../../components/layouts/primary/PrimaryLayout";
import { Auth } from "aws-amplify";

export default function Dashboard() {
  //identitas diri hook state
  const identitasDiriFieldsComp = identitasDiriFields;
  let identitasDiriFieldsState: any = {};
  identitasDiriFieldsComp.forEach(
    (field: FormFields) => (identitasDiriFieldsState[field.id] = "")
  );

  //info kontak hook state
  const infoKontakFieldsComp = infoKontakFields;
  let infoKontakFieldsState: any = {};
  infoKontakFieldsComp.forEach(
    (field: FormFields) => (infoKontakFieldsState[field.id] = "")
  );
  const push = usePush();
  // const { user, redirectTo, authenticated } = useAuth();
  const { user, authenticated, setUser, setAuthenticated } = useUser();

  // const [loginState, setLoginState] = useState(fieldsState);

  useEffect(() => {
    console.log("user effect login: ", user);
    console.log("auth effect login: ", authenticated);
    if (!authenticated) {
      // push("/login");
    }
  }, [user, authenticated]);

  return (
    <PrimaryLayout user={user}>
      <main className="bg-gray-200 h-screen flex flex-col items-center justify-center">
        <p className="text-xl mb-4">
          {/* Welcome, your email is {user.attributes.email} */}
        </p>

        <button
          className="mt-2 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md"
          onClick={async () => {
            await Auth.signOut();
            setUser(null);
            setAuthenticated(false);
          }}
        >
          Log out
        </button>
      </main>
    </PrimaryLayout>
  );
}

Dashboard.authenticate = true;
