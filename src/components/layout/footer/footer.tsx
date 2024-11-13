import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import { Typography } from "@/components";
import { AboutLinks, HomeLinks, SocialsLinks } from "@/constants";

export function Footer() {
  return (
    <section className="base-layout 2xl:px-_162 bg-white px-5 pb-6 pt-_50 xl:px-20 xl:pt-_62 2xl:pt-_100">
      <div>
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <div className="relative mb-_30 h-11 w-11">
              <Image src="/img/Logo.png" alt="logo" fill />
            </div>
            <ul className="mb-6">
              <li className="mb-_14 flex gap-2">
                <Mail className="h-4 w-5" />
                <Typography variant="p" paragraphSize="sm">
                  hello@skillbridge.com
                </Typography>
              </li>
              <li className="mb-_14 flex gap-2">
                <Phone className="h-5 w-5" />
                <Typography variant="p" paragraphSize="sm">
                  +221 000 00 00
                </Typography>
              </li>
              <li className="flex gap-2">
                <MapPin className="h-5 w-4" />
                <Typography variant="p" paragraphSize="sm">
                  Dakar
                </Typography>
              </li>
            </ul>
          </div>

          <div className="flex justify-between gap-_30">
            <ul className="lg:w-56">
              <li>
                <Typography
                  variant="h2"
                  headingSize="xs"
                  className="mb-2 font-semibold"
                >
                  Home
                </Typography>
              </li>
              {HomeLinks.map(({ title, path }, key) => (
                <li key={key} className="mb-2">
                  <Link href={path}>{title}</Link>
                </li>
              ))}
            </ul>
            <ul className="lg:w-56">
              <li>
                <Typography
                  variant="h2"
                  headingSize="xs"
                  className="mb-2 font-semibold"
                >
                  About Us
                </Typography>
              </li>
              {AboutLinks.map(({ title, path }, key) => (
                <li key={key} className="mb-2">
                  <Link href={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 md:mt-0 lg:w-56">
            <Typography variant="h2" headingSize="xs" className="font-semibold">
              Social Profiles
            </Typography>

            <ul className="flex gap-_14">
              {SocialsLinks.map(({ href, icon }, key) => (
                <Link href={href} key={key} className="mt-_10">
                  <li className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200">
                    <div className="relative h-5 w-5">
                      <Image src={icon} alt="logo" fill />
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Typography
            variant="p"
            paragraphSize="xs"
            className="text-center !text-gray-300"
          >
            © 2024 Skillbridge. All rights reserved.
          </Typography>
        </div>
      </div>
    </section>
  );
}
