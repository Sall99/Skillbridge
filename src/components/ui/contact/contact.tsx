import React from "react";
import { ContactForm } from "../form/contact-form";
import { SocialLinks } from "../social-links";

export function ContactCo() {
  return (
    <div className="layout flex flex-col rounded-xl bg-white md:flex-row">
      <ContactForm />
      <SocialLinks />
    </div>
  );
}
