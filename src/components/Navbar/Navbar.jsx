"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import { LoginButton } from "../Buttons/LoginButton";
import { LogoutButton } from "../Buttons/LogoutButton";

export const NavBar = () => {
  const { user, error, isLoading } = useUser();

  if (error) return <div>{error?.message}</div>
  if (isLoading) return <div>Cargando...</div>
  return (
    <div className="p-4 flex w-full justify-between bg-gray-800">
      {!user && !isLoading && (
        <>
          <LoginButton />
        </>
      )}
      {user && !isLoading && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

export default NavBar;