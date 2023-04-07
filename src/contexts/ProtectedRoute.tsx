import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface IProtectedRoute {
  authenticated: boolean;
  children: any;
}
export const ProtectedRoute = ({
  authenticated = false,
  children,
}: IProtectedRoute) => {
  const [login, setLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    login && router.push("/login"); //or router.replace("/account/login");
  }, [login]);
  useEffect(() => {
    !authenticated && setLogin(true);
  }, []);

  return (
    <>
      {authenticated ? (
        children
      ) : (
        <div>
          <h4>
            You are not Authorized.{" "}
            <Link href="/login">
              <a>Please log in</a>
            </Link>
          </h4>
        </div>
      )}
    </>
  );
};
