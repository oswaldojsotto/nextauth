import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

const font = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="gap-4 flex flex-col h-full w-full items-center justify-between
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#614385] to-[#516395]">
      <div />
      <div className="flex flex-col justify-center items-center gap-4">
        <h3
          className={cn("text-3xl text-white drop-shadow-lg", font.className)}>
          🔐NextAuth
        </h3>
        <p className="text-white ">An authentication service</p>
        <LoginButton mode="modal" asChild>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
      <p className="text-white">By Oswaldo J. Sotto</p>
    </main>
  );
}
