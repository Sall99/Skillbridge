import React from "react";

import { Button, Typography } from "@/components";
import Input from "../input";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type InputType = "text" | "email" | "password";

const formFields: Array<{
  name: string;
  label: string;
  placeholder: string;
  type: InputType;
  multiline: boolean;
}> = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "Enter your full name",
    type: "text",
    multiline: false,
  },
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
    type: "password",
    multiline: false,
  },
];

export function SignUpForm() {
  return (
    <form className="w-full rounded-md bg-white p-_30 lg:p-_50">
      <div className="text-center">
        <Typography variant="h2" headingSize="md" className="mb-2">
          Sign Up
        </Typography>
        <Typography variant="p" paragraphSize="xs">
          Create an account to unlock exclusive features.
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

        <p>
          I agree with{" "}
          <Link href="" className="text-end underline-offset-2 hover:underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="" className="text-end underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-3">
          <input type="checkbox" />
          <p>Remember Me</p>
        </div>

        <Button variant="primary">Sign Up</Button>
        <div className="hr-sect">OR</div>
        <Button variant="secondary" icon iconSrc="/img/google-icon.png">
          Login with Google
        </Button>

        <div>
          <div className="flex justify-center gap-1">
            <p> Already have an account?</p>
            <Link href="/sign-up" className="flex gap-1">
              <p className="hover:underline">Login</p>
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
