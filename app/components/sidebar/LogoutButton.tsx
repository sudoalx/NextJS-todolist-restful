"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { CiLogin, CiLogout } from "react-icons/ci";
import { IoShield } from "react-icons/io5";

export const LogoutButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <Loading />;
  if (status === "unauthenticated") return <LoginButton />;

  return (
    <button
      className="px-4 py-3 flex items-center space-x-4 group w-full border hover:bg-red-500 rounded-lg hover:text-white transition duration-300 font-bold"
      aria-label="Logout"
      onClick={() => signOut()}
    >
      <CiLogout className="text-xl group-hover:text-white transition duration-300 font-bold" />
      <span>Logout</span>
    </button>
  );
};

const Loading = () => {
  return (
    <button
      className="px-4 py-3 flex items-center space-x-4 group w-full border hover:bg-red-500 rounded-lg hover:text-white transition duration-300 font-bold"
      aria-label="Logout"
      disabled
    >
      <IoShield className="text-xl group-hover:text-white transition duration-300 font-bold" />
      <span>Loading...</span>
    </button>
  );
};

const LoginButton = () => {
  return (
    <button
      className="px-4 py-3 flex items-center space-x-4 group w-full border hover:bg-cyan-600 rounded-lg hover:text-white transition duration-300 font-bold"
      aria-label="Login"
      onClick={() => signIn()}
    >
      <CiLogin className="text-xl group-hover:text-white transition duration-300 font-bold" />
      <span>Login</span>
    </button>
  );
};
