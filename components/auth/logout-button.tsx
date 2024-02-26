"use client";
import { logout } from "@/actions/logout";
import React from "react";

interface LogoutButtonProps {
  children: React.ReactNode;
}

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };
  return (
    <span className="pointer-cursor" onClick={onClick}>
      {children}
    </span>
  );
};

export default LogoutButton;
