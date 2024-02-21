"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "redirect" | "modal";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <div>Implementa el modal</div>;
  }

  return (
    <span className="cursor-pointer" onClick={onClickButton}>
      {children}
    </span>
  );
};

export default LoginButton;
