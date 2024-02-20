import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

const font = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="gap-4 flex flex-col h-full w-full items-center justify-center 
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#009245] to-[#FCEE21]">
      <h3 className={cn("text-3xl text-white drop-shadow-lg", font.className)}>
        🔐NextAuth
      </h3>
      <p className="text-white ">An authentication service</p>
      <LoginButton>
        <Button variant="secondary" size="lg">
          Sign in
        </Button>
      </LoginButton>
    </main>
  );
}
