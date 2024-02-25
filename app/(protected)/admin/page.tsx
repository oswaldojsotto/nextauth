"use client";
import { admin } from "@/actions/admin";
import RoleGate from "@/components/auth/role-gate";
import { FormSucess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import React from "react";
import { toast } from "sonner";

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then(data => {
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(data.success);
      }
    });
  };

  const onApiRouteClick = () => {
    fetch("/api/admin").then(response => {
      if (response.ok) {
        toast.success("SUCCESS: Admins can run this API");
      } else {
        toast.error("ERROR: User has no permission to run this API");
      }
    });
  };
  return (
    <Card className="w-[90%]">
      <CardHeader className="text-xl font-semibold"> 🗝️ Admin</CardHeader>
      <CardContent>
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSucess message="This message can only be seen by an Admin" />
        </RoleGate>
        <div className="flex flex-col justify-center">
          <div className="w-full shadow-md py-2 px-4 flex justify-between gap-8">
            <p className="mt-1">Admin only API Route</p>
            <Button onClick={onApiRouteClick}>Click to test</Button>
          </div>
          <div className="w-full shadow-md py-2 px-4 flex justify-between gap-8">
            <p className="mt-1">Admin only Server action</p>
            <Button onClick={onServerActionClick}>Click to test</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
