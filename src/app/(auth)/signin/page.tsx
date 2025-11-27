"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const signinSchema = z.object({
  email: z.string().email("Please enter a valid email."),
  password: z.string().min(8, "Passwords must be at least 8 characters."),
});

type SigninValues = z.infer<typeof signinSchema>;
type PendingAction = "signin" | "forgot" | "resend" | null;

export default function SigninPage() {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<PendingAction>(null);

  const form = useForm<SigninValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const runAction = async (action: PendingAction, fn: () => Promise<void>) => {
    setPendingAction(action);
    try {
      await fn();
    } catch (error) {
      console.error(error);
      setServerError("Something went wrong. Please try again.");
    } finally {
      setPendingAction(null);
    }
  };

  const handleSubmit = async (values: SigninValues) => {
    setServerMessage(null);
    setServerError(null);

    await runAction("signin", async () => {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (!response.ok) {
        setServerError(data.error ?? "Unable to sign in.");
        return;
      }

      setServerMessage(data.message ?? "Signed in successfully.");
      form.reset({ email: values.email, password: "" });
    });
  };

  const triggerForgotPassword = async () => {
    setServerMessage(null);
    setServerError(null);
    const email = form.getValues("email");

    if (!email) {
      setServerError("Enter your email address first.");
      return;
    }

    await runAction("forgot", async () => {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) {
        setServerError(data.error ?? "Unable to start password reset.");
        return;
      }

      setServerMessage(
        data.message ?? "Check your inbox for the reset instructions."
      );
    });
  };

  const triggerResendVerification = async () => {
    setServerMessage(null);
    setServerError(null);
    const email = form.getValues("email");

    if (!email) {
      setServerError("Enter your email address first.");
      return;
    }

    await runAction("resend", async () => {
      const response = await fetch("/api/auth/resend-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) {
        setServerError(data.error ?? "Unable to resend the verification link.");
        return;
      }

      setServerMessage(
        data.message ?? "If the account exists, we just sent a new link."
      );
    });
  };

  const isPending = (action: PendingAction) => pendingAction === action;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)] px-4 py-12 text-white">
      <Card className="w-full max-w-md border-slate-800/70 bg-slate-950/60 text-white backdrop-blur">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription className="text-slate-400">
            Enter your credentials to jump back into your workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        autoComplete="email"
                        placeholder="noreply@flavidairysolution.com"
                        className="bg-slate-900/60"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        autoComplete="current-password"
                        placeholder="••••••••"
                        className="bg-slate-900/60"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={isPending("signin")}
              >
                {isPending("signin") && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Sign in
              </Button>
            </form>
          </Form>

          <div className="space-y-2 text-sm">
            <button
              type="button"
              onClick={triggerForgotPassword}
              className="text-slate-300 transition hover:text-white"
              disabled={isPending("forgot")}
            >
              {isPending("forgot") ? "Sending reset link..." : "Forgot password?"}
            </button>
            <button
              type="button"
              onClick={triggerResendVerification}
              className="text-slate-300 transition hover:text-white"
              disabled={isPending("resend")}
            >
              {isPending("resend")
                ? "Resending verification..."
                : "Resend verification email"}
            </button>
          </div>

          {serverMessage && (
            <p className="rounded-md bg-emerald-500/10 px-3 py-2 text-sm text-emerald-400">
              {serverMessage}
            </p>
          )}

          {serverError && (
            <p className="rounded-md bg-rose-500/10 px-3 py-2 text-sm text-rose-400">
              {serverError}
            </p>
          )}

          <p className="text-center text-sm text-slate-400">
            Need an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-white underline-offset-4 hover:underline"
            >
              Create one
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

