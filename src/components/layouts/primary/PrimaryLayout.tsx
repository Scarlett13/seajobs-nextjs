import Head from "next/head";
import Footer from "../../navigation/footer/Footer";
import { Header } from "../../navigation/header/Header";
import { CognitoUser } from "@aws-amplify/auth";

export interface IPrimaryLayout {
  children: any;
  user?: CognitoUser | null;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, user }) => {
  console.log("primarylayout props: ", user);
  return (
    <>
      <Head>
        <title>Seajobs</title>
      </Head>
      <section>
        <Header user={user} />
        <main>{children}</main>
        <Footer />
      </section>
    </>
  );
};

export default PrimaryLayout;
