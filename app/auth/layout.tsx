import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex w-full  h-full justify-center items-center
      bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF512F] to-[#DD2476] ">
      {children}
    </div>
  );
};

export default AuthLayout;
