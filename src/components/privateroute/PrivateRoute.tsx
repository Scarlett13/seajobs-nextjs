import usePush from "@utils/UsePush";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "../../contexts/AmplifyAuthContext";
import { Auth } from "aws-amplify";
import PrimaryLayout from "../../components/layouts/primary/PrimaryLayout";
import Typography from "../../components/typography/Typography";
import Link from "next/link";

export interface IPrivateRoute {
  success: boolean;
  user: any;
}

export default function PrivateRoute({ success, user }: IPrivateRoute) {
  const push = usePush();
  const { isTa } = useUser();

  return (
    // <PrimaryLayout user={user}>
    <main className="h-screen bg-black items-center justify-center flex flex-col ">
      {success ? (
        <div>
          <Typography variant="h2" color="custom_success">
            Kamu sudah login,{" "}
            <button
              type={"button"}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-10"
              onClick={() => {
                isTa ? push("/ta/dashboard") : push("/com/dashboard");
              }}
              disabled={false}
            >
              silahkan ke dashboard untuk memulai...
            </button>
          </Typography>
        </div>
      ) : (
        <div>
          <Typography variant="h2" color="danger">
            Kamu tidak memiliki akses ke halaman ini,{" "}
            <button
              type={"button"}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-10"
              onClick={() => {
                isTa ? push("/ta/login") : push("/com/login");
              }}
              disabled={false}
            >
              silahkan Login terlebih dahulu!
            </button>
          </Typography>
        </div>
      )}
    </main>
    // </PrimaryLayout>
  );
}

PrivateRoute.authenticate = false;
