import { ExtendedUser } from "../next-auth";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label?: string;
}

const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[90%] shadow-2xl">
      <CardHeader className="">
        <p className="font-semibold w-full flex justify-center">{label}</p>
      </CardHeader>
      <CardContent className="flex justify-between flex-col gap-2">
        <div className="flex justify-between">
          <p className="font-semibold">User Id:</p>
          <p>{user?.id}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">User name:</p>
          <p>{user?.name}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Email:</p>
          <p>{user?.email}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Role:</p>
          <p>{user?.role}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Two factor authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
