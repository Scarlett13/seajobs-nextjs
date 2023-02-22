// import styles from "./ProfileMainLayout.module.css";

import FlowbiteContext from "../../../contexts/FlowbiteContext";
import { SidebarProvider } from "../../../contexts/SidebarContext";
import { CognitoUser } from "@aws-amplify/auth";
import Head from "next/head";
import Footer from "../../navigation/footer/Footer";
import { Header } from "../../navigation/header/Header";

export interface IProfileMainLayout {
  children?: any;
  user?: CognitoUser | null;
}

const ProfileMainLayout: React.FC<IProfileMainLayout> = ({
  children,
  user,
}) => {
  return (
    <FlowbiteContext>
      <SidebarProvider>
        <Head>
          <title>Seajobs</title>
        </Head>
        <section>
          <Header user={user} />
        </section>

        <section>
          <main>{children}</main>
        </section>
      </SidebarProvider>
    </FlowbiteContext>
  );
};

export default ProfileMainLayout;
