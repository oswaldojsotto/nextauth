"use client";
import { useTransition } from "react";
import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";
import React from "react";
import { useSession } from "next-auth/react";

const Settings = () => {
  const [isPending, startTransition] = useTransition();
  const { update } = useSession();
  const onClickUpdateName = () => {
    startTransition(() => {
      settings({ name: "Oswaldo Sotto" }).then(() => {
        update();
      });
    });
  };

  return (
    <div className="w-[90%]">
      <Card className="w-full">
        <CardHeader className="text-xl font-semibold"> ⚙️ Settings</CardHeader>
        <CardContent>
          <Button disabled={isPending} onClick={onClickUpdateName}>
            Update Name
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
