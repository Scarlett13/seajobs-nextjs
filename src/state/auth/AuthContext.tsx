import { Auth } from "aws-amplify";
import router, { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAuthContext {
  authenticated: boolean;
  user: any | null;
  login: (email: string, password: string) => void;
  logOut: () => void;
}

const defaultValue: IAuthContext = {
  user: null,
  authenticated: false,
  login: (email: string, password: string) => undefined,
  logOut: () => undefined,
};

const AuthContext = createContext<IAuthContext>(defaultValue);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const [authenticated, setAuthenticated] = useState(
    defaultValue.authenticated
  );
  const [user, setUser] = useState<any | null>();

  useEffect(() => {
    const getProfile = async () => {
      const userInfo = await Auth.currentUserInfo();

      if (userInfo) {
        if (router.pathname === "/login" || router.pathname === "/signup") {
          await router.push("/dashboard");
        }
        setUser(userInfo);
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        await router.push("/login");
      }
    };

    getProfile();
  }, [router]);

  const login = async (email: string, password: string) => {
    try {
      await Auth.signIn(email, password);
      setAuthenticated(true);
      setUser(await Auth.currentUserInfo());
    } catch (err) {
      setAuthenticated(false);
      setUser(null);
      console.error(err);
    }
  };

  const logOut = async () => {
    console.log("logout");
    try {
      setAuthenticated(false);
      setUser(null);
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  const value = {
    user,
    authenticated,
    login,
    logOut,
  };

  if (authenticated) {
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  } else {
    return null;
  }
};

export default AuthContext;
