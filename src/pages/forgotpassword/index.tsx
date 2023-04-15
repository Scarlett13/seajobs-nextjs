import usePush from "@utils/UsePush";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "../../contexts/AmplifyAuthContext";
import { Auth } from "aws-amplify";
import PrimaryLayout from "../../components/layouts/primary/PrimaryLayout";
import Typography from "../../components/typography/Typography";
import { FormProvider, useForm } from "react-hook-form";
import {
  resetPasswordRequestFields,
  confirmResetPasswordRequestFields,
  FormFields,
} from "../../constants/forgotpassordconstants/ForgotPasswordConstants";
import Input from "../../components/forms/Input";
import PasswordInput from "../../components/forms/PasswordInput";

export default function ForgotPassword() {
  const [message, setMessage] = useState<string>("qwewqeqwe");
  const [success, setSuccess] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("hilham.qq1@gmail.com");
  const [requestSent, setRequestSent] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);
  const router = useRouter();
  const push = usePush();

  const { loading, setLoading, user } = useUser();

  const resetPasswordFieldsComp = resetPasswordRequestFields;
  let resetPasswordFieldsState: any = {};
  resetPasswordFieldsComp.forEach(
    (field: FormFields) => (resetPasswordFieldsState[field.id] = "")
  );

  const confirmResetPasswordFieldsComp = confirmResetPasswordRequestFields;
  let confirmResetPasswordFieldsState: any = {};
  confirmResetPasswordFieldsComp.forEach(
    (field: FormFields) => (confirmResetPasswordFieldsState[field.id] = "")
  );

  //============= REGIION FORM HANDLER ===================//
  const methods = useForm({
    mode: "onTouched",
  });

  const methods1 = useForm({
    mode: "onTouched",
  });

  const { handleSubmit } = methods;

  const { handleSubmit: handleSubmit1 } = methods1;

  const onSubmitResetPassword = async (data: any) => {
    console.log("button pressed");
    // !STARTERCONF Remove console log, use logger instead
    if (!loading) {
      await resetPassword(data);
    }
    return;
  };

  const onSubmitVerifyCode = async (data: any) => {
    console.log("button pressed");
    // !STARTERCONF Remove console log, use logger instead
    if (!loading) {
      await verifyCode(data);
    }
    return;
  };

  async function resetPassword(data: any) {
    setLoading(true);
    try {
      const forgotPassword = await Auth.forgotPassword(data.email);
      setUserName(data.email);
      setRequestSent(true);
      setMessage("Kode verifikasi telah dikirim ke email anda.");
      setLoading(false);
      setSuccess(true);
      console.log("wubbatest: ", forgotPassword);
    } catch (error) {
      setUserName("");
      setRequestSent(false);
      setMessage("Email tidak ditemukan");
      setLoading(false);
      setSuccess(false);
      console.log("wubbatest: ", error);
    }
  }

  async function verifyCode(data: any) {
    if (data.new_password !== data.new_password_confirmation) {
      setMessage("Password tidak sama");
      setSuccess(false);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const test = await Auth.forgotPasswordSubmit(
        userName,
        data.verification_code,
        data.new_password
      );
      console.log("wubbatest: ", test);
      setMessage("Password berhasil diubah");
      setSuccess(true);
      setLoading(false);
      setFinished(true);
    } catch (error) {
      setMessage("Kode verifikasi salah");
      setSuccess(false);
      setLoading(false);
      console.log("wubbatest: ", error);
    }
  }
  //============= END REGIION FORM HANDLER ==============//

  return (
    <PrimaryLayout user={user}>
      <main className="h-screen bg-black items-center">
        <Typography
          variant="h1"
          color="custom_white"
          className="text-center py-8"
        >
          {requestSent ? "Konfirmasi Lupa Password" : "Lupa Password"}
        </Typography>
        {!requestSent ? (
          <div className="bg-form-bg shadow-md px-8 pt-6 mb-4 pb-4 text-left max-w-xl mx-auto">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmitResetPassword)}>
                {resetPasswordFieldsComp.map((field: FormFields) => {
                  if (field.type === "email") {
                    return (
                      <section key={field.titelKey} className={"mb-4"}>
                        <p className="mb-2 font-light text-gray-400">
                          {field.labelText}
                        </p>
                        <Input
                          id={field.id}
                          type={field.type}
                          label={null}
                          disabled={field.disabled ? field.disabled : false}
                          validation={{
                            required: {
                              value: field.isRequired,
                              message: `${field.labelText} harus di isi!`,
                            },
                            pattern: {
                              value:
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi,
                              message: "email tidak valid",
                            },
                          }}
                          placeholder={field.placeholder}
                          helperText={undefined}
                        />
                      </section>
                    );
                  }
                })}
              </form>
            </FormProvider>

            <button
              type={"submit"}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-main-cta-button-bg hover:bg-main-cta-button-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-10 mb-10"
              disabled={false}
              onSubmit={handleSubmit(onSubmitResetPassword)}
              onClick={handleSubmit(onSubmitResetPassword)}
            >
              {loading === null || loading === undefined
                ? "Reset password"
                : loading
                ? "Loading..."
                : "Reset Password"}
            </button>
          </div>
        ) : (
          <div className="bg-form-bg shadow-md px-8 pt-6 mb-4 pb-4 text-left max-w-xl mx-auto">
            <Typography
              variant="h4"
              color={success ? `custom_success` : `danger`}
            >
              {message}{" "}
            </Typography>
            <FormProvider {...methods1}>
              <form
                onSubmit={handleSubmit1(onSubmitVerifyCode)}
                autoComplete="off"
              >
                {confirmResetPasswordFieldsComp.map((field: FormFields) => {
                  if (field.type === "email") {
                    return (
                      <section key={field.titelKey} className={"mb-4"}>
                        <p className="mb-2 font-light text-gray-400">
                          {field.labelText}
                        </p>
                        <Input
                          id={field.id}
                          type={field.type}
                          label={null}
                          disabled={
                            finished
                              ? true
                              : field.disabled
                              ? field.disabled
                              : false
                          }
                          validation={{
                            required: {
                              value: field.isRequired,
                              message: `${field.labelText} harus di isi!`,
                            },
                            pattern: {
                              value:
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi,
                              message: "email tidak valid",
                            },
                          }}
                          value={userName}
                          placeholder={field.placeholder}
                          helperText={undefined}
                        />
                      </section>
                    );
                  } else if (field.type === "text") {
                    return (
                      <section key={field.titelKey} className={"mb-4"}>
                        <p className="mb-2 font-light text-gray-400">
                          {field.labelText}
                        </p>
                        <Input
                          id={field.id}
                          type={field.type}
                          label={null}
                          disabled={
                            finished
                              ? true
                              : field.disabled
                              ? field.disabled
                              : false
                          }
                          validation={{
                            required: {
                              value: field.isRequired,
                              message: `${field.labelText} harus di isi!`,
                            },
                            pattern: {
                              value: /^(?=.{6}$) *\d* *$/gm,
                              message: "code tidak valid",
                            },
                          }}
                          placeholder={field.placeholder}
                          helperText={undefined}
                        />
                      </section>
                    );
                  } else {
                    return (
                      <section key={field.titelKey} className={"mb-4"}>
                        <p className="mb-2 font-light text-gray-400">
                          {field.labelText}
                        </p>
                        <PasswordInput
                          id={field.id}
                          type={field.type}
                          label={null}
                          disabled={
                            finished
                              ? true
                              : field.disabled
                              ? field.disabled
                              : false
                          }
                          validation={{
                            required: {
                              value: field.isRequired,
                              message: `${field.labelText} harus di isi!`,
                            },
                          }}
                          placeholder={field.placeholder}
                          helperText={undefined}
                        />
                      </section>
                    );
                  }
                })}
              </form>
            </FormProvider>
            <button
              type={"submit"}
              className={`mb-8 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md ${
                finished
                  ? "text-white bg-gray-300 "
                  : " text-white bg-main-cta-button-bg hover:bg-main-cta-button-bg "
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-10`}
              disabled={finished}
              onSubmit={handleSubmit1(onSubmitVerifyCode)}
              onClick={handleSubmit1(onSubmitVerifyCode)}
            >
              {loading === null || loading === undefined
                ? "Ganti password"
                : loading
                ? "Loading..."
                : "Ganti Password"}
            </button>
          </div>
        )}

        <div
          className={`container mx-0 min-w-full flex flex-col items-center ${
            finished ? "visible" : "hidden"
          }`}
        >
          <button
            type={"button"}
            className={` py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-main-cta-button-bg hover:bg-main-cta-button-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-10`}
            onClick={() => {
              push("/login");
            }}
          >
            {loading === null || loading === undefined
              ? "Login sekarang"
              : loading
              ? "Loading..."
              : "Login sekarang"}
          </button>
        </div>
      </main>
    </PrimaryLayout>
  );
}

ForgotPassword.authenticate = false;
