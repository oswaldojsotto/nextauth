"use client";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";
import React from "react";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}
const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();
  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content" />
    );
  }

  return <>{children}</>;
};

export default RoleGate;
