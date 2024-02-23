"use server";
import { signOut } from "@/auth";

export const logout = async () => {
  //execute some server stuff before logout
  await signOut();
};
