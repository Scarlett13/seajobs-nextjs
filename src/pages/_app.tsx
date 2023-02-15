import type { AppProps } from "next/app";
import "./globals.css";
import { Amplify, Hub, Logger } from "aws-amplify";
import awsExports from "../aws-exports";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect, useState } from "react";
import React from "react";
// import { AuthProvider } from "../state/auth/AuthContext";
import { NextPage } from "next";
import AuthContext, { useUser } from "../contexts/AmplifyAuthContext";
import { CognitoUser } from "@aws-amplify/auth";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
config.autoAddCss = false;

Amplify.configure({ ...awsExports, ssr: true });

type NextPageWithLayout = NextPage & {
  authenticate?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [loading, setLoading] = useState(false);

  const authProps = Component.authenticate;

  // eslint-disable-next-line no-extra-boolean-cast
  return Boolean(authProps) ? (
    <AuthContext>
      <Component {...pageProps} />
    </AuthContext>
  ) : (
    // </PrimaryLayout>
    <Component {...pageProps} />
  );
}

export default MyApp;
