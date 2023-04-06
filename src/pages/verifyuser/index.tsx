import usePush from "@utils/UsePush";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "../../contexts/AmplifyAuthContext";
import { Auth } from "aws-amplify";
import PrimaryLayout from "../../components/layouts/primary/PrimaryLayout";
import Typography from "../../components/typography/Typography";
import Link from "next/link";

export interface IVerifyUser {
  sampleTextProp: string;
}

export default function VerifyUser() {
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();
  const push = usePush();

  const { loading, setLoading, user } = useUser();
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  useEffect(() => {
    async function verifyUser() {
      const decoded = JSON.parse(atob(data as string));
      const { userName, redirectUrl, clientId, region } = decoded;
      console.log("verifyuse3: ");

      if (!pageLoading) {
        setLoading(true);
        setPageLoading(true);
        try {
          const a = await Auth.confirmSignUp(userName, code as string);
          setSuccess(true);
          setLoading(false);
          setPageLoading(false);
          console.log("verifyuser:1 ", a);
        } catch (error) {
          setSuccess(false);
          setLoading(false);
          setPageLoading(false);
          setMessage(error as string);
          console.log("verifyuser2: ", error);
        }
      } else {
        setSuccess(false);
        setMessage("URL yang anda tuju tidak valid atau sudah kadaluwarsa!");
        console.log("verifyuser4: ");
      }
    }

    console.log("fired at once!");
    const { data, code } = router.query;
    if (data && code) {
      verifyUser();
    }
  }, [router.query]);

  return (
    <PrimaryLayout user={user}>
      <main className="h-screen bg-black items-center justify-center flex flex-col ">
        {!success ? (
          <div>
            <Typography variant="h2" color="custom_success">
              Akun berhasil di konfirmasi! silahkan{" "}
              <button
                type={"button"}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-10"
                onClick={() => {
                  push("/login");
                }}
                disabled={false}
              >
                Login untuk mulai mencari proyek...
              </button>
            </Typography>
          </div>
        ) : (
          <div>
            <Typography variant="h2" color="danger">
              Gagal verifikasi akun, silahkan menghubungi admin atau{" "}
              <button
                type={"button"}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-10"
                onClick={() => {
                  push("/signup");
                }}
                disabled={false}
              >
                Daftar ulang disini...
              </button>
            </Typography>
          </div>
        )}
      </main>
    </PrimaryLayout>
  );
}

VerifyUser.authenticate = false;
