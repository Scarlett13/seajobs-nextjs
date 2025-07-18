import { useAtom } from "jotai";
import PageLoader from "next/dist/client/page-loader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PasswordTemplate from "../../../components/inputs/password/PasswordTemplate";
import FormHeaderLayout from "../../../components/layouts/formheaderlayout/FormHeaderLayout";
import {
  FormFields,
  loginFields,
} from "../../../constants/authformconstants/AuthFormConstants";
import { NextPageWithLayout } from "../../page";
import Input from "../../../components/inputs/reguler/InputTemplate";
import FormExtra from "../../../components/inputs/extras/FormExtra";
import FormAction from "../../../components/inputs/actions/FormAction";
import PrimaryLayout from "../../../components/layouts/primary/PrimaryLayout";

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
    console.log("onsubmit");
    e.preventDefault();
    // login(loginState.email, loginState.password);
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="">
          {fields.map((field) =>
            field.type === "password" ? (
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
            ) : (
              <Input
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
            )
          )}
        </div>
        <FormExtra isTa={true} />
        <FormAction
          isTa={true}
          handleSubmit={handleSubmit}
          text="Login"
          isLoading={false}
        />
      </form>
    </>
  );
};

export default function Login() {
  const router = useRouter();
  // const [isAuthorized] = useAtom(authorizationAtom);

  // useEffect(() => {
  //   (async () => {
  //     if (isAuthorized) {
  //       return router.push("/dashboard");
  //     }
  //   })();
  // }, [isAuthorized, router]);

  // if (isAuthorized) return <PageLoader />;

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
