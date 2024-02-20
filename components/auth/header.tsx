import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Montserrat({ subsets: ["latin"], weight: ["600"] });

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-4">
      <h1 className={cn("text-3xl font-semibold text-black", font.className)}>
        🔐 Authorize
      </h1>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  );
};
