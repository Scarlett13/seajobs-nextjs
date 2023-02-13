import type { AppProps } from "next/app";
import "./globals.css";
import { Amplify, Hub, Logger } from "aws-amplify";
import awsExports from "../aws-exports";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect } from "react";
import React from "react";
import AuthContext from "../state/auth/AmplifyAuthContext";
import { AuthProvider } from "../state/auth/AuthContext";
import { NextPage } from "next";
import { useRouter } from "next/router";
config.autoAddCss = false;

Amplify.configure({ ...awsExports, ssr: true });

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  authenticate?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const logger = new Logger("My-Logger");

  const listener = (data: { payload: { event: any } }) => {
    logger.info("the Auth module is configured");
    console.log("auth event");
  };

  Hub.listen("auth", listener);

  const router = useRouter();
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: any) => page);
  const authProps = Component.authenticate;

  // eslint-disable-next-line no-extra-boolean-cast
  return Boolean(authProps)
    ? getLayout(
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      )
    : getLayout(<Component {...pageProps} />);

  // return getLayout(
  //   // <AuthProvider>
  //   <Component {...pageProps} />
  //   // </AuthProvider>
  // );
}

export default MyApp;
