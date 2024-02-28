"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ButtonSetProps {
  layout?: "vertical" | "horizontal";
  setOpen: (arg0: boolean) => void;
}

export const ButtonSet = ({ layout, setOpen }: ButtonSetProps) => {
  const pathname = usePathname();
  return (
    <div
      onClick={() => setOpen(false)}
      className={`w-full justify-start flex gap-x-2  ${
        layout === "vertical" && "flex-col gap-y-4"
      }`}>
      <Button asChild variant={pathname === "/server" ? "default" : "outline"}>
        <Link href="/server">Server</Link>
      </Button>
      <Button asChild variant={pathname === "/client" ? "default" : "outline"}>
        <Link href="/client">Client</Link>
      </Button>
      <Button asChild variant={pathname === "/admin" ? "default" : "outline"}>
        <Link href="/admin">Admin</Link>
      </Button>
      <Button
        asChild
        variant={pathname === "/settings" ? "default" : "outline"}>
        <Link href="/settings">Settings</Link>
      </Button>
    </div>
  );
};
