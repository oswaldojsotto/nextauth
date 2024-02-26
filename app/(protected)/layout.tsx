import React from "react";
import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div
      className=" flex h-full w-full items-center justify-between flex-col 
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#614385] to-[#516395]">
      <Navbar />
      {children}
      <div />
    </div>
  );
};

export default ProtectedLayout;
