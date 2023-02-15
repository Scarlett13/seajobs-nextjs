import { useEffect, useState } from "react";
import { signupFields } from "../../constants/authformconstants/AuthFormConstants";
import Input from "../../components/inputs/reguler/InputTemplate";
import { NextPageWithLayout } from "../page";
import FormAction from "../../components/inputs/actions/FormAction";
import FormHeaderLayout from "../../components/layouts/formheaderlayout/FormHeaderLayout";
import PrimaryLayout from "../../components/layouts/primary/PrimaryLayout";
import PasswordTemplate from "../../components/inputs/password/PasswordTemplate";
import usePush from "@utils/UsePush";
import { useUser } from "../../contexts/AmplifyAuthContext";
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";

const SignupForm: NextPageWithLayout = () => {
  const fields = signupFields;
  let fieldsState: any = {};

  fields.forEach((field) => (fieldsState[field.id] = ""));
  const [signupState, setSignupState] = useState(fieldsState);
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);

  const push = usePush();

  const [open, setOpen] = useState(false);
  const [signUpError, setSignUpError] = useState<string>("");

  const { user, authenticated } = useUser();

  useEffect(() => {
    console.log("user effect login: ", user);
    console.log("auth effect login: ", authenticated);
    if (authenticated) {
      push("/dashboard");
    }
  }, [user, authenticated]);

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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (passwordMatch) {
      console.log(signupState);
      createAccount();
    }
  };

  //handle Signup API Integration here
  const createAccount = () => {
    console.log(signupState);
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
                />
              </section>
            )
          )}
          <p className={"-mt-4 font-extra-light text-sm text-red-500"}>
            {passwordMatch ? "" : "password tidak cocok"}
          </p>
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>
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
          {signUpError}
        </Alert>
      </Snackbar>
    </>
  );
};

function Signup() {
  return (
    <>
      <section>
        <FormHeaderLayout
          heading="Daftar"
          paragraph="Sudah mempunyai akun? "
          linkName="Masuk"
          linkUrl="/login"
        >
          <SignupForm />
        </FormHeaderLayout>
      </section>
    </>
  );
}

export default Signup;

Signup.authenticate = false;
Signup.getLayout = (page: any, authenticated: boolean) => {
  return (
    <>
      <PrimaryLayout>{page}</PrimaryLayout>
    </>
  );
};
