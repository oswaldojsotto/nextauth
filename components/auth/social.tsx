"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const onClickButton = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button
        variant="outline"
        size="lg"
        className="w-full"
        onClick={() => onClickButton("google")}>
        <FcGoogle className="text-2xl" />
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="w-full"
        onClick={() => onClickButton("github")}>
        <FaGithub className="text-2xl" />
      </Button>
    </div>
  );
};

export default Social;
