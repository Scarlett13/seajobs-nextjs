import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { CognitoUser } from "@aws-amplify/auth";
import { Auth, Hub, Logger } from "aws-amplify";
import usePush from "@utils/UsePush";
import { useRouter } from "next/router";
import Link from "next/link";
import PrivateRoute from "../components/privateroute/PrivateRoute";

interface UserContextType {
  user: CognitoUser | null;
  setUser: Dispatch<SetStateAction<CognitoUser | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  isTa: boolean;
  setIsTa: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

interface Props {
  children: React.ReactElement;
}

export default function AuthContext(
  this: any,
  { children }: Props
): ReactElement {
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [isTa, setIsTa] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const push = usePush();
  const router = useRouter();

  async function checkUser() {
    setLoading(true);
    console.log("masuk ke loading true");
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();
      setUser(amplifyUser);
      setAuthenticated(true);
      setLoading(false);
      setUsername(amplifyUser.getUsername());
      if (
        router.pathname.includes("login") ||
        router.pathname.includes("signup") ||
        router.pathname.includes("verifyuser") ||
        router.pathname.includes("forgotpassword")
      ) {
        // isTa ? push("/ta/dashboard") : push("/com/dashboard");
      }
      console.log("masuk ke loading false 1");
    } catch (error) {
      // No current signed in user.
      console.error("error getuser: ", error);
      setUser(null);
      setAuthenticated(false);
      setLoading(false);
      if (
        !router.pathname.includes("login") &&
        !router.pathname.includes("signup") &&
        !router.pathname.includes("verifyuser") &&
        !router.pathname.includes("forgotpassword") &&
        router.pathname !== "/"
      ) {
        // isTa ? push("/ta/login") : push("/com/login");
      }

      console.log("masuk ke loading false 2");
    }
  }

  async function checkRole() {
    const role = JSON.parse(localStorage.getItem("isTa") as string);

    if (role === undefined || role === null || role === "") {
      localStorage.setItem("isTa", JSON.stringify(true));
      setIsTa(true);
    } else {
      console.log("rolenya: ", role);
      setIsTa(role);
    }
  }

  useEffect(() => {
    checkUser();
    checkRole();
  });

  useEffect(() => {
    localStorage.setItem("isTa", JSON.stringify(isTa));
  }, [isTa]);

  useEffect(() => {
    console.log("loading-ganti: ", loading);
  }, [loading]);

  useEffect(() => {
    const logger = new Logger("My-Logger");

    const listener = (data: { payload: { event: any } }) => {
      logger.info("the Auth module is configured");
      console.log("auth event auth ctx: ", data.payload.event);
      checkUser();
      checkRole();
    };

    Hub.listen("auth", listener);
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        authenticated,
        setAuthenticated,
        isTa,
        setIsTa,
      }}
    >
      {children}
    </UserContext.Provider>
  );

  // if (user) {
  //   return (
  //     <UserContext.Provider value={{ user, setUser }}>
  //       {children}
  //     </UserContext.Provider>
  //   );
  // } else {
  //   //ganti disini ke unauthenticated page
  //   return <></>;
  // }
}

interface IProtectRoute {
  children?: any;
}

export const ProtectRoute = ({ children }: IProtectRoute) => {
  const { authenticated, loading, user, isTa } = useUser();
  const push = usePush();
  const router = useRouter();

  console.log(
    "wubbalubba1: ",
    router.pathname.includes("login") ||
      router.pathname.includes("signup") ||
      router.pathname.includes("verifyuser") ||
      router.pathname.includes("forgotpassword")
  );

  console.log(
    "wubbalubba2: ",
    !router.pathname.includes("login") &&
      !router.pathname.includes("signup") &&
      !router.pathname.includes("verifyuser") &&
      !router.pathname.includes("forgotpassword") &&
      router.pathname !== "/"
  );

  if (!authenticated) {
    if (
      !router.pathname.includes("login") &&
      !router.pathname.includes("signup") &&
      !router.pathname.includes("verifyuser") &&
      !router.pathname.includes("forgotpassword") &&
      router.pathname !== "/"
    ) {
      return <PrivateRoute user={user} success={authenticated} />;
    } else {
      if (
        (router.pathname.includes("/ta/") && !isTa) ||
        (router.pathname.includes("/com/") && isTa)
      ) {
        return <PrivateRoute user={user} success={authenticated} />;
      }
      return children;
    }
  } else {
    if (
      router.pathname.includes("login") ||
      router.pathname.includes("signup") ||
      router.pathname.includes("verifyuser") ||
      router.pathname.includes("forgotpassword")
    ) {
      return <PrivateRoute user={user} success={authenticated} />;
    } else {
      if (
        (router.pathname.includes("/ta/") && !isTa) ||
        (router.pathname.includes("/com/") && isTa)
      ) {
        return <PrivateRoute user={user} success={authenticated} />;
      }
      return children;
    }
  }

  // if (
  //   !authenticated &&
  //   router.pathname !== "/login" &&
  //   router.pathname !== "/" &&
  //   router.pathname !== "/signup"
  // ) {

  // } else if (
  //   authenticated &&
  //   (router.pathname === "/login" || router.pathname === "/signup")
  // ) {
  //   return children;
  // }
};

export const useUser = (): UserContextType => useContext(UserContext);
