// import styles from "./ProfileMainLayout.module.css";

import FlowbiteContext from "../../../../contexts/FlowbiteContext";
import { SidebarProvider } from "../../../../contexts/SidebarContext";
import { CognitoUser } from "@aws-amplify/auth";
import Head from "next/head";
import Footer from "../../../../components/navigation/footer/Footer";
import { Header } from "../../../../components/navigation/header/Header";

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

        <main>
          <section>{children}</section>
        </main>
      </SidebarProvider>
    </FlowbiteContext>
  );
};

export default ProfileMainLayout;
