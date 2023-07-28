import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";
import { CognitoUser } from "@aws-amplify/auth";
import { logout } from "@utils/AuthUtils";
import Image from "next/image";
import logo_full_ta from "@assets/logo/svg/logo_2.svg";
import logo_full_perusahaan from "@assets/logo/svg/logo_1.svg";
import { useRouter } from "next/router";
import usePush from "@utils/UsePush";
import { useUser } from "../../../contexts/AmplifyAuthContext";

export interface IHeader {
  user?: CognitoUser | null;
}

export const Header = ({
  user,
}: // onCreateAccount,
IHeader) => {
  const router = useRouter();
  const push = usePush();
  const { setAuthenticated, setUser, isTa, setIsTa, authenticated } = useUser();

  const navigations = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: isTa ? "/ta/explore" : "/com/explore",
      label: "Explore",
    },
    {
      path: isTa ? "/ta/dashboard" : "/com/dashboard",
      label: "Dashboard",
    },
    {
      path: "/",
      label: "Contact",
    },
  ];

  const navigationTa = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/ta/explore",
      label: "Explore",
    },
    {
      path: "/ta/dashboard",
      label: "Dashboard",
    },
    {
      path: "/",
      label: "Contact",
    },
  ];

  const [navbar, setNavbar] = useState(false);

  async function logoutHeader() {
    const logoutdata = await logout();
    console.log("wubbalubba: ", logoutdata);
    if (logoutdata) {
      // setUser(null);
      // setAuthenticated(false);
    }
  }

  return (
    <div>
      <nav
        className={`top-0 left-0 right-0 ${
          isTa ? "bg-hero-bg" : "bg-white"
        } shadow`}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                {/* <h2 className="text-2xl text-white font-medium">Seajobs</h2> */}
                {isTa ? (
                  <Image
                    src={logo_full_ta}
                    alt="logo seajobs"
                    height={64}
                    width={86}
                  />
                ) : (
                  <Image
                    src={logo_full_perusahaan}
                    alt="logo seajobs"
                    height={64}
                    width={86}
                  />
                )}
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 ${
                        isTa ? "text-white" : "text-gray-900"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 ${
                        isTa ? "text-white" : "text-gray-900"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              } `}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {navigations.map((nav) => (
                  <li
                    key={nav.label}
                    className={`${
                      isTa
                        ? "text-white hover:text-white hover-bg-gray-700"
                        : "text-gray-900 hover:text-gray-900 hover:bg-gray-300"
                    } px-3 py-2 rounded-md text-sm font-medium ${
                      !user &&
                      (nav.label === "Dashboard" || nav.label === "Explore")
                        ? "hidden"
                        : "block"
                    }`}
                  >
                    <Link
                      href={nav.path}
                      className={`${
                        isTa
                          ? "text-white hover:text-white hover-bg-gray-700"
                          : "text-gray-900 hover:text-gray-90 hover:bg-gray-300"
                      } px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      {nav.label}
                    </Link>
                  </li>
                ))}
                {user ? (
                  <li
                    key="login"
                    className={`visible md:invisible  px-3 py-2 rounded-md text-sm font-medium ${
                      isTa
                        ? "text-white hover:bg-gray-700 hover:text-white"
                        : "text-gray-900 hover:text-gray-900 hover:bg-gray-300"
                    }`}
                  >
                    <button
                      onClick={async () => {
                        await logoutHeader();
                      }}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isTa
                          ? "text-white hover:bg-gray-700 hover:text-white"
                          : "text-gray-900 hover:text-gray-900 hover:bg-gray-300"
                      }`}
                    >
                      Keluar
                    </button>
                  </li>
                ) : (
                  <li
                    key="login"
                    className={`visible md:invisible  px-3 py-2 rounded-md text-sm font-medium ${
                      isTa
                        ? "text-white hover:bg-gray-700 hover:text-white"
                        : "text-gray-900 hover:text-gray-900 hover:bg-gray-300"
                    }`}
                  >
                    <Link
                      href={isTa ? "/ta/login" : "/com/login"}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isTa
                          ? "text-white hover:bg-gray-700 hover:text-white"
                          : "text-gray-900 hover:text-gray-900 hover:bg-gray-300"
                      }`}
                    >
                      Masuk
                    </Link>
                  </li>
                )}
              </ul>
              {/* START TOGGLE BETWEEN TA AND COMPANY */}
              <div className="visible md:hidden">
                <label
                  htmlFor="isTaToggleMobile"
                  className={`inline-flex items-center p-2 rounded-md cursor-pointer text-white`}
                >
                  <input
                    id="isTaToggleMobile"
                    type="checkbox"
                    className={`hidden peer ${
                      authenticated ? "cursor-not-allowed" : ""
                    }`}
                    onChange={(e) => {
                      console.log(e.target.checked);
                      setIsTa(e.target.checked);
                    }}
                    onClick={(e) => {
                      setIsTa(!isTa);
                    }}
                    defaultChecked={isTa}
                    disabled={authenticated || router.pathname !== "/"}
                  />
                  <span
                    className={`px-4 py-2 rounded-l-md bg-main-cta-button-bg peer-checked:bg-form-bg ${
                      authenticated || router.pathname !== "/"
                        ? "cursor-not-allowed"
                        : ""
                    }`}
                  >
                    Perusahaan
                  </span>
                  <span
                    className={`px-4 py-2 rounded-r-md bg-gray-500 peer-checked:bg-main-cta-button-bg ${
                      authenticated || router.pathname !== "/"
                        ? "cursor-not-allowed"
                        : ""
                    }`}
                  >
                    TA
                  </span>
                </label>
              </div>
              {/* END TOGGLE BETWEEN TA AND COMPANY */}
            </div>
          </div>

          {/* START TOGGLE BETWEEN TA AND COMPANY */}
          <div className="hidden md:block">
            <label
              htmlFor="isTaToggle"
              className={`inline-flex items-center p-2 rounded-md cursor-pointer text-white`}
            >
              <input
                id="isTaToggle"
                type="checkbox"
                className={`hidden peer ${
                  authenticated ? "cursor-not-allowed" : ""
                }`}
                onChange={(e) => {
                  console.log(e.target.checked);
                  setIsTa(e.target.checked);
                }}
                defaultChecked={isTa}
                disabled={authenticated || router.pathname !== "/"}
                onClick={(e) => {
                  setIsTa(!isTa);
                }}
              />
              <span
                className={`px-4 py-2 rounded-l-md bg-main-cta-button-bg peer-checked:bg-form-bg ${
                  authenticated || router.pathname !== "/"
                    ? "cursor-not-allowed"
                    : ""
                }`}
              >
                Perusahaan
              </span>
              <span
                className={`px-4 py-2 rounded-r-md bg-gray-500 peer-checked:bg-main-cta-button-bg ${
                  authenticated || router.pathname !== "/"
                    ? "cursor-not-allowed"
                    : ""
                }`}
              >
                TA
              </span>
            </label>
          </div>
          {/* END TOGGLE BETWEEN TA AND COMPANY */}

          {user ? (
            <div
              className={`invisible md:visible items-end justify-end gap-2 md:gap-8 place-it`}
            >
              <button
                onClick={async () => {
                  await logoutHeader();
                }}
                className={`font-bold px-3 py-2 rounded-md text-sm ${
                  isTa
                    ? "text-white hover:bg-gray-700 hover:text-white"
                    : "text-gray-900 hover:text-gray-900 hover:bg-gray-300"
                }`}
              >
                Keluar
              </button>
            </div>
          ) : (
            <div
              className={`invisible md:visible items-end justify-end gap-2 md:gap-8 place-it`}
            >
              <Link
                href={isTa ? "/ta/login" : "/com/login"}
                className={`font-bold px-3 py-2 rounded-md text-sm ${
                  isTa
                    ? "text-white hover:bg-gray-700 hover:text-white"
                    : "text-gray-900 hover:text-gray-900 hover:bg-gray-300"
                }`}
              >
                Masuk
              </Link>
              <Link
                href={isTa ? "/ta/signup" : "/com/signup"}
                className={`font-bold px-3 py-2 rounded-md text-sm ${
                  isTa
                    ? "text-white hover:bg-gray-700 hover:text-white"
                    : "text-gray-900 hover:text-gray-900 hover:bg-gray-300"
                }`}
              >
                Daftar
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
