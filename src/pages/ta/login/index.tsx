import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { login, logout } from "@utils/AuthUtils";
import usePush from "@utils/UsePush";
import { useEffect, useState } from "react";
import FormAction from "../../../components/inputs/actions/FormAction";
import FormExtra from "../../../components/inputs/extras/FormExtra";
import PasswordTemplate from "../../../components/inputs/password/PasswordTemplate";
import Input from "../../../components/inputs/reguler/InputTemplate";
import FormHeaderLayout from "../../../components/layouts/formheaderlayout/FormHeaderLayout";
import PrimaryLayout from "../../../components/layouts/primary/PrimaryLayout";
import {
  FormFields,
  loginFields,
} from "../../../constants/authformconstants/AuthFormConstants";
import { useUser } from "../../../contexts/AmplifyAuthContext";

export default function Login() {
  const fields = loginFields;
  let fieldsState: any = {};
  fields.forEach((field: FormFields) => (fieldsState[field.id] = ""));

  const push = usePush();

  const [open, setOpen] = useState(false);
  const [signInError, setSignInError] = useState<string>("");
  const [loginState, setLoginState] = useState(fieldsState);

  const {
    user,
    setUser,
    authenticated,
    setAuthenticated,
    loading,
    setLoading,
  } = useUser();

  const handleChange = (e: { target: { id: any; value: any } }) => {
    console.log(loginState);
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    setLoading(true);
    console.log("onsubmit");
    e.preventDefault();
    const returnDataLogin = await login(
      loginState.email,
      loginState.password,
      true
    );
    if (returnDataLogin.success) {
      console.log("login user: " + user);
      console.log("login resultlogin: " + returnDataLogin);
      setUser(returnDataLogin.data);
      setAuthenticated(true);
      setSignInError("");
      setLoading(false);
      setOpen(false);
      push("/ta/dashboard");
    } else {
      setUser(null);
      setAuthenticated(false);
      setSignInError(returnDataLogin.data.message);
      setLoading(false);
      setOpen(true);
      await logout();
    }
    console.log(returnDataLogin);
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
    <PrimaryLayout user={user}>
      <section>
        <FormHeaderLayout
          heading="Masuk"
          paragraph="Belum mempunyai akun? "
          linkName="Daftar"
          linkUrl="/ta/signup"
        >
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="">
              {fields.map((field) =>
                field.type === "password" ? (
                  <section key={field.titelKey}>
                    <p className="-mb-4 font-light text-gray-400">
                      {field.labelText}
                    </p>
                    <PasswordTemplate
                      isTa={true}
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
                  </section>
                ) : (
                  <section key={field.titelKey}>
                    <p className="-mb-4 font-light text-gray-400">
                      {field.labelText}
                    </p>
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
                      isTa={true}
                    />
                  </section>
                )
              )}
            </div>
            <FormExtra isTa={true} />
            <FormAction
              isTa={true}
              handleSubmit={handleSubmit}
              isLoading={loading}
              text="Login"
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
        </FormHeaderLayout>
      </section>
    </PrimaryLayout>
  );
}

Login.authenticate = true;
// Login.getLayout = (page: any) => {
//   return (
//     <>
//       <PrimaryLayout>{page}</PrimaryLayout>
//     </>
//   );
// };
