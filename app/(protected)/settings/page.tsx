import React from "react";
import { auth, signOut } from "@/auth";

const Settings = async () => {
  const session = await auth();

  console.log();
  return (
    <div>
      Settings page
      <p>{JSON.stringify(session)}</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}>
        <button type="submit"> Sign Out </button>
      </form>
    </div>
  );
};

export default Settings;
