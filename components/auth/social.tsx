"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

const Social = () => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button variant="outline" size="lg" className="w-full">
        <FcGoogle className="text-2xl" />
      </Button>
      <Button variant="outline" size="lg" className="w-full">
        <FaGithub className="text-2xl" />
      </Button>
    </div>
  );
};

export default Social;
