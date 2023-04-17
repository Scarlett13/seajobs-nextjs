"use-client";

import { useEffect, useState } from "react";
import FormHeaderLayout from "../../../components/layouts/formheaderlayout/FormHeaderLayout";
import PrimaryLayout from "../../../components/layouts/primary/PrimaryLayout";
import {
  FormFields,
  loginFields,
} from "../../../constants/authformconstants/AuthFormConstants";
import Input from "../../../components/inputs/reguler/InputTemplate";
import { NextPageWithLayout } from "../../page";
import FormExtra from "../../../components/inputs/extras/FormExtra";
import FormAction from "../../../components/inputs/actions/FormAction";
import { Auth } from "aws-amplify";
import router from "next/router";
import PasswordTemplate from "../../../components/inputs/password/PasswordTemplate";

const fields = loginFields;
let fieldsState: any = {};
fields.forEach((field: FormFields) => (fieldsState[field.id] = ""));

const LoginForm: NextPageWithLayout = () => {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: { target: { id: any; value: any } }) => {
    console.log(loginState);
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    authenticateUser(e);
  };

  //Handle Login API Integration here oi
  const authenticateUser = async (e: any) => {
    console.log(loginState.email);
    try {
      await Auth.signIn(loginState.email, loginState.password);

      await router.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="">
          {fields.map((field) =>
            field.type === "password" ? (
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
            )
          )}
        </div>
        <FormExtra />
        <FormAction
          handleSubmit={handleSubmit}
          text="Login"
          isLoading={false}
        />
      </form>
    </>
  );
};

const Login: NextPageWithLayout = () => {
  // const { user, login, logOut } = useAuth();
  // const router = useRouter();
  // const [isAuthorized] = useAtom(authorizationAtom);

  // console.log("36", isAuthorized);

  // useEffect(() => {
  //   (async () => {
  //     console.log("40", isAuthorized);
  //     if (isAuthorized) {
  //       console.log("42", isAuthorized);
  //       return router.push("/dashboard");
  //     }
  //   })();
  // }, [isAuthorized]);

  // console.log("48", user);

  // if (isAuthorized ) return router.push("/dashboard");

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
};

export default Login;

Login.getLayout = (page) => {
  return (
    <>
      <PrimaryLayout>{page}</PrimaryLayout>
    </>
  );
};
