import { useState } from "react";
import { signupFields } from "../../constants/authformconstants/AuthFormConstants";
import Input from "../../components/inputs/reguler/InputTemplate";
import { NextPageWithLayout } from "../page";
import FormAction from "../../components/inputs/actions/FormAction";
import FormHeaderLayout from "../../components/layouts/formheaderlayout/FormHeaderLayout";
import PrimaryLayout from "../../components/layouts/primary/PrimaryLayout";
import PasswordTemplate from "../../components/inputs/password/PasswordTemplate";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

const SignupForm: NextPageWithLayout = () => {
  const [signupState, setSignupState] = useState(fieldsState);
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);

  const handleChange = (e: { target: { id: any; value: any } }) => {
    if (e.target.id === "confirm_password") {
      if (e.target.value !== signupState.password) {
        setPasswordMatch(false);
      }
    }
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {
    console.log(signupState);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) =>
          field.type === "password" ? (
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
          ) : (
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
          )
        )}
        <p>Password</p>
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
};

const Signup: NextPageWithLayout = () => {
  return (
    <>
      <section>
        <FormHeaderLayout
          heading="Daftar"
          paragraph="Sudah mempunyai akun? "
          linkName="Masuk"
          linkUrl="/login"
          children={<SignupForm />}
        />
      </section>
    </>
  );
};

export default Signup;

Signup.getLayout = (page) => {
  return (
    <>
      <PrimaryLayout>{page}</PrimaryLayout>
    </>
  );
};
