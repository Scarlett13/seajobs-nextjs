import React, { ReactElement, useState } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import PasswordTemplate from "../../../components/inputs/password/PasswordTemplate";
import Input from "../../../components/inputs/reguler/InputTemplate";
import FormExtra from "../../../components/inputs/extras/FormExtra";
import FormAction from "../../../components/inputs/actions/FormAction";
import {
  FormFields,
  loginFields,
} from "../../../constants/authformconstants/AuthFormConstants";
import { NextPageWithLayout } from "../../page";
import FormHeaderLayout from "../../../components/layouts/formheaderlayout/FormHeaderLayout";
import PrimaryLayout from "../../../components/layouts/primary/PrimaryLayout";

const LoginForm: NextPageWithLayout = () => {
  const fields = loginFields;
  let fieldsState: any = {};
  fields.forEach((field: FormFields) => (fieldsState[field.id] = ""));

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [signInError, setSignInError] = useState<string>("");
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: { target: { id: any; value: any } }) => {
    console.log(loginState);
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    console.log("onsubmit");
    e.preventDefault();
    try {
      await Auth.signIn(loginState.email, loginState.password);
      router.push(`/dashboard`);
    } catch (error: any) {
      console.error(error);
      setSignInError(error.message);
      setOpen(true);
    }
  };

  const handleClose = (
    event: React.SyntheticEvent<any, Event>,
    reason: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="">
          {fields.map((field) => {
            return field.type === "password" ? (
              <PasswordTemplate
                key={field.id}
                handleChange={handleChange}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ) : (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            );
          })}
        </div>
        <FormExtra />
        <FormAction
          handleSubmit={handleSubmit}
          text="Login"
          isLoading={false}
        />
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => {
          handleClose;
        }}
      >
        <Alert
          onClose={() => {
            handleClose;
          }}
          severity="error"
        >
          {signInError}
        </Alert>
      </Snackbar>
    </>
  );
};

interface Props {
  isLoggedIn: boolean;
}

export default function Login({ isLoggedIn }: Props): ReactElement {
  const router = useRouter();

  if (isLoggedIn) {
    router.push("/dashboard");
  }
  return (
    <>
      <section>
        <FormHeaderLayout
          heading="Masuk"
          paragraph="Belum mempunyai akun? "
          linkName="Daftar"
          linkUrl="/signup"
        >
          <LoginForm />
        </FormHeaderLayout>
      </section>
    </>
  );
}

Login.getLayout = (page: any) => {
  return (
    <>
      <PrimaryLayout>{page}</PrimaryLayout>
    </>
  );
};
