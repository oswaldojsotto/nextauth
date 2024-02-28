"use client";

import React, { useState } from "react";
import UserButton from "@/components/auth/user-button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ButtonSet } from "./button-set";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[90%] m-4 px-8 shadow-md">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>
          <HamburgerMenuIcon
            className="h-6 w-6 md:hidden"
            onClick={() => setOpen(true)}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 align-end">
          <DropdownMenuItem>
            <ButtonSet layout="vertical" setOpen={setOpen} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="hidden md:flex">
        <ButtonSet setOpen={setOpen} />
      </div>
      <div>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
