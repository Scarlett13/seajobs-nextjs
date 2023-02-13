import PageLoader from "next/dist/client/page-loader";
import { useRouter } from "next/router";
import React, { FC, useCallback, useContext } from "react";

import { useAuth } from "../../../state/auth/AuthContext";
import PrimaryLayout from "../../../components/layouts/primary/PrimaryLayout";

export default function Dashboard() {
  const router = useRouter();
  const { user, authenticated, login, logOut } = useAuth();

  console.log(user);

  return (
    <main className="bg-gray-200 h-screen flex flex-col items-center justify-center">
      <p className="text-xl mb-4">
        {/* Welcome, your email is {user.attributes.email} */}
      </p>

      <button
        className="mt-2 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md"
        onClick={logOut}
      >
        Log out
      </button>
    </main>
  );
}

Dashboard.authenticate = true;
Dashboard.getLayout = (page: any) => {
  return (
    <>
      <PrimaryLayout>{page}</PrimaryLayout>
    </>
  );
};
