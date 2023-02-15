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

interface UserContextType {
  user: CognitoUser | null;
  setUser: Dispatch<SetStateAction<CognitoUser | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
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
  const [loading, setLoading] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  // useEffect(() => {
  //   checkUser();
  // }, []);

  // async function checkUser() {
  //   try {
  //     console.log("user1: ", user);
  //     console.log("auth1: ", authenticated);
  //     const amplifyUser = await Auth.currentAuthenticatedUser();
  //     console.log(amplifyUser);
  //     setUser(amplifyUser);
  //     setAuthenticated(true);
  //     console.log("user2: ", user);
  //     console.log("auth2: ", authenticated);
  //   } catch (error) {
  //     // No current signed in user.
  //     console.error("error getuser: ", error);
  //     setUser(null);
  //     setAuthenticated(false);
  //   }
  // }

  useEffect(() => {
    const logger = new Logger("My-Logger");

    const listener = (data: { payload: { event: any } }) => {
      logger.info("the Auth module is configured");
      console.log("auth event auth ctx: ", data.payload.event);
    };

    Hub.listen("auth", listener);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        authenticated,
        setAuthenticated,
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

export const useUser = (): UserContextType => useContext(UserContext);
