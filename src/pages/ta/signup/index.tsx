import { SyntheticEvent, useEffect, useState } from "react";
import { signupFields } from "../../../constants/authformconstants/AuthFormConstants";
import Input from "../../../components/inputs/reguler/InputTemplate";
import { NextPageWithLayout } from "../../page";
import FormAction from "../../../components/inputs/actions/FormAction";
import FormHeaderLayout from "../../../components/layouts/formheaderlayout/FormHeaderLayout";
import PrimaryLayout from "../../../components/layouts/primary/PrimaryLayout";
import PasswordTemplate from "../../../components/inputs/password/PasswordTemplate";
import usePush from "@utils/UsePush";
import { useUser } from "../../../contexts/AmplifyAuthContext";
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { signup } from "@utils/AuthUtils";
import { isEmpty } from "@utils/StringUtils";

export default function Signup() {
  const fields = signupFields;
  let fieldsState: any = {};

  fields.forEach((field) => (fieldsState[field.id] = ""));
  const [signupState, setSignupState] = useState(fieldsState);
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);

  const push = usePush();

  const [open, setOpen] = useState(false);
  const [signUpError, setSignUpError] = useState<string>("");
  const [signUpSuccess, setSignUpSuccess] = useState<string>("");

  const { user, loading, authenticated, setAuthenticated, setLoading } =
    useUser();

  const handleChange = (e: { target: { id: any; value: any } }) => {
    if (e.target.id === "confirm_password") {
      console.log(signupState);
      if (e.target.value !== signupState.password) {
        setPasswordMatch(false);
      } else {
        setPasswordMatch(true);
      }
    }
    if (e.target.id === "password") {
      console.log(signupState);
      if (e.target.value !== signupState.confirm_password) {
        setPasswordMatch(false);
      } else {
        setPasswordMatch(true);
      }
    }
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (passwordMatch) {
      setLoading(true);
      console.log(signupState);
      const retdata = await signup(
        signupState.fullname,
        signupState.email_address,
        signupState.password,
        "ta"
      );
      if (retdata.success) {
        setSignUpError("");
        setSignUpSuccess(
          "Email konfirmasi telah dikirim ke " +
            signupState.email_address +
            ", silahkan cek email anda!"
        );
        setOpen(true);
        setLoading(false);
        push("/ta/login");
      } else {
        setSignUpError(retdata.data.message);
        setSignUpSuccess("");
        setOpen(true);
        setLoading(false);
      }
    }
  };

  const handleSnackBarClose = (
    event: Event | SyntheticEvent<any, Event>,
    reason: SnackbarCloseReason | null
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSignUpError("");
    setSignUpSuccess("");
    setOpen(false);
  };

  const handleAlertClose = () => {
    setOpen(false);
    setSignUpError("");
    setSignUpSuccess("");
  };

  return (
    <PrimaryLayout user={user}>
      <FormHeaderLayout
        heading="Daftar"
        paragraph="Sudah mempunyai akun? "
        linkName="Masuk"
        linkUrl="/ta/login"
      >
        <form className="mt-10" onSubmit={handleSubmit} autoComplete="off">
          <div className="">
            {fields.map((field) =>
              field.type === "password" ? (
                <section key={field.titelKey}>
                  <p className="-mb-4 font-light text-gray-400">
                    {field.labelText}
                  </p>
                  <PasswordTemplate
                    key={field.id}
                    handleChange={handleChange}
                    value={signupState[field.id]}
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
              ) : (
                <section key={field.titelKey}>
                  <p className="-mb-4 font-light text-gray-400">
                    {field.labelText}
                  </p>
                  <Input
                    key={field.id}
                    handleChange={handleChange}
                    value={signupState[field.id]}
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
            <p className={"-mt-4 font-extra-light text-sm text-red-500"}>
              {passwordMatch ? "" : "password tidak cocok"}
            </p>
            <FormAction
              handleSubmit={handleSubmit}
              isLoading={loading}
              text="Signup"
              isTa={true}
            />
          </div>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleSnackBarClose}
        >
          <Alert
            onClose={handleAlertClose}
            severity={isEmpty(signUpError) ? "success" : "error"}
          >
            {isEmpty(signUpError) ? signUpSuccess : signUpError}
          </Alert>
        </Snackbar>
      </FormHeaderLayout>
    </PrimaryLayout>
  );
}

// export default Signup;

Signup.authenticate = true;
