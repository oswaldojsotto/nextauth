"use client";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import React from "react";

const Settings = () => {
  const user = useCurrentUser();

  const logOut = () => {
    logout();
  };

  return (
    <div>
      <form>
        <button className="bg-white rounded p-4" onClick={logOut} type="submit">
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default Settings;
