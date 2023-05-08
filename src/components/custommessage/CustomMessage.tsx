import usePush from "@utils/UsePush";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "../../contexts/AmplifyAuthContext";
import { Auth } from "aws-amplify";
import PrimaryLayout from "../../components/layouts/primary/PrimaryLayout";
import Typography from "../../components/typography/Typography";
import Link from "next/link";

export interface ICustomMessage {
  success: boolean;
  message: string;
}

export default function CustomMessage({ success, message }: ICustomMessage) {
  const push = usePush();
  const { isTa } = useUser();
  const successClass =
    "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-10";
  const failClass =
    "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-10";

  return (
    // <PrimaryLayout user={user}>
    <main
      className={`h-screen  items-center justify-center flex flex-col ${
        isTa ? "bg-black" : "bg-white"
      }`}
    >
      <div>
        <Typography variant="h2" color={success ? "custom_success" : "danger"}>
          {`${message}, `}
          <button
            type={"button"}
            className={success ? successClass : failClass}
            onClick={() => {
              isTa ? push("/ta/dashboard") : push("/com/dashboard");
            }}
            disabled={false}
          >
            Kembali ke dashboard
          </button>
        </Typography>
      </div>
    </main>
    // </PrimaryLayout>
  );
}

CustomMessage.authenticate = false;
