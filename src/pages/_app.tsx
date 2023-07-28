import type { AppProps } from "next/app";
import "./globals.css";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React, { useEffect } from "react";
// import { AuthProvider } from "../state/auth/AuthContext";
import { NextPage } from "next";
import AuthContext, {
  useUser,
  ProtectRoute,
} from "../contexts/AmplifyAuthContext";
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
  const authProps = Component.authenticate;

  // eslint-disable-next-line no-extra-boolean-cast
  return Boolean(authProps) ? (
    <AuthContext>
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
    </AuthContext>
  ) : (
    <AuthContext>
      <Component {...pageProps} />
    </AuthContext>
  );
}

export default MyApp;
