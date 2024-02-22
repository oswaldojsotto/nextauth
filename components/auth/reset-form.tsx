"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import CardWrapper from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ResetSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSucess } from "@/components/form-success";
import { Reset } from "@/actions/reset";

type LoginFormInputs = z.infer<typeof ResetSchema>;

export const ResetForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(ResetSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      Reset(values).then(response => {
        setSuccess(response?.success);
        setError(response?.error);
      });
    });
  };

  return (
    <CardWrapper
      headerTitle="Forgot your password?"
      backButtonText="Back to login"
      backButtonHref="/auth/login">
      <Form {...form}>
        <form className="my-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        type="email"
                        placeholder="oswaldo.sotto@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <div className="my-6">
            <FormError message={error} />
            <FormSucess message={success} />
            <Button disabled={isPending} type="submit" className="w-full">
              Send reset email
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
