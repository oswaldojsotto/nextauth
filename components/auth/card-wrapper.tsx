"use client";
import React from "react";
import { Card, CardHeader, CardFooter, CardContent } from "../ui/card";
import { Header } from "@/components/auth/header";
import Social from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerTitle: string;
  backButtonText: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerTitle,
  backButtonText,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerTitle} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <BackButton href={backButtonHref} label={backButtonText} />
    </Card>
  );
};

export default CardWrapper;
