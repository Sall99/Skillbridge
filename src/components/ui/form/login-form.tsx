import React from "react";

import { Button, Typography } from "@/components";
import Input from "../input";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type InputType = "email" | "password";

const formFields: Array<{
  name: string;
  label: string;
  placeholder: string;
  type: InputType;
  multiline: boolean;
}> = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    multiline: false,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "email",
    multiline: false,
  },
];

export function LoginForm() {
  return (
    <form className="w-full rounded-md bg-white p-_30 lg:p-_50">
      <div className="text-center">
        <Typography variant="h2" headingSize="md" className="mb-2">
          Login form
        </Typography>
        <Typography variant="p" paragraphSize="xs">
          Welcome back! Please log in to access your account.
        </Typography>
      </div>

      <div className="mt-_50 flex flex-col gap-6">
        {formFields.map(
          ({ name, label, placeholder, type, multiline }, key) => (
            <div key={key} className="input">
              <Input
                name={name}
                label={label}
                placeholder={placeholder}
                type={type}
                multiline={multiline}
              />
            </div>
          ),
        )}

        <Link href="" className="text-end underline-offset-2 hover:underline">
          Forgot Password?
        </Link>

        <div className="flex gap-3">
          <input type="checkbox" />
          <p>Remember Me</p>
        </div>

        <Button variant="primary">Login</Button>
        <div className="hr-sect">OR</div>
        <Button variant="secondary" icon iconSrc="/img/google-icon.png">
          Login with Google
        </Button>

        <div>
          <div className="flex justify-center gap-1">
            <p> Don’t have an account?</p>
            <Link href="/sign-up" className="flex gap-1">
              <p className="hover:underline"> Sign Up</p>
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
