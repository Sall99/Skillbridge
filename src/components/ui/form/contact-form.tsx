import React from "react";
import Input from "../input";
import { Button } from "../button";

type InputType = "text" | "email" | "tel" | "number";

const formFields: Array<{
  name: string;
  label: string;
  placeholder: string;
  type: InputType;
  multiline: boolean;
}> = [
  {
    name: "fName",
    label: "First Name",
    placeholder: "Enter First Name",
    type: "text",
    multiline: false,
  },
  {
    name: "lName",
    label: "Last Name",
    placeholder: "Enter Last Name",
    type: "text",
    multiline: false,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "text",
    multiline: false,
  },
  {
    name: "phoneNumber",
    label: "Phone",
    placeholder: "Enter Phone Number",
    type: "tel",
    multiline: false,
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "Enter your subject",
    type: "text",
    multiline: false,
  },
  {
    name: "message",
    label: "Message (optional)",
    placeholder: "Enter your Message",
    type: "text",
    multiline: true,
  },
];

export function ContactForm() {
  return (
    <form className="contact-form md:p-_60 w-full p-4 2xl:p-20">
      <div className="flex flex-col gap-_30 md:grid md:grid-cols-2">
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
      </div>
      <div className="mt-_30 flex w-full items-center justify-center">
        <Button variant="primary">Sen your message</Button>
      </div>
    </form>
  );
}
