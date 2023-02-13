import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const authState = (Component: any) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const router = useRouter();
    const [user, setUser] = useState<any | null>();
    const [authenticated, setAuthenticated] = useState(false);

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
          setUser(null);

          if (router.pathname !== "/login" && router.pathname !== "/signup") {
            await router.push("/login");
          }
        }
      };

      getProfile();
    }, [router]);

    if (authenticated) {
      return <Component {...props} user={user} />;
    } else {
      return null;
    }
  };
};

export default authState;
