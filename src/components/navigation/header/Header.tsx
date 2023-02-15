import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";

interface HeaderProps {
  user?: CognitoUser | null;
}

export const Header = ({
  user,
}: // onCreateAccount,
HeaderProps) => {
  console.log("headrprops: ", user);
  const navigations = [
    {
      path: "./",
      label: "Home",
    },
    {
      path: "./",
      label: "Explore",
    },
    {
      path: "./",
      label: "Dashboard",
    },
    {
      path: "./",
      label: "Contact",
    },
  ];

  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <Head>
        <title>Seajobs</title>
        <meta name="description" content="seajobs.co, find your work here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-hero-bg shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2xl text-white font-medium">Seajobs</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
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
                      className="w-6 h-6 text-white"
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
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {navigations.map((nav) => (
                  <li
                    key={nav.label}
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Link
                      href={nav.path}
                      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {nav.label}
                    </Link>
                  </li>
                ))}
                {user ? (
                  <li
                    key="login"
                    className="visible md:invisible text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <p
                      // onClick={onLogout}
                      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Keluar
                    </p>
                  </li>
                ) : (
                  <li
                    key="login"
                    className="visible md:invisible text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Link
                      href="/login"
                      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Masuk
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {user ? (
            <div
              className={`invisible md:visible items-end justify-end gap-2 md:gap-8 place-it`}
            >
              <p
                // onClick={onLogout}
                className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm"
              >
                Keluar
              </p>
            </div>
          ) : (
            <div
              className={`invisible md:visible items-end justify-end gap-2 md:gap-8 place-it`}
            >
              <Link
                href="/login"
                className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm"
              >
                Masuk
              </Link>
              <Link
                href="/signup"
                className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm"
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
