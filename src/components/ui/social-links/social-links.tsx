import Image from "next/image";
import React from "react";

import { Typography } from "@/components";
import Link from "next/link";
import { SocialsLinks as socials } from "@/constants";

interface ContactCardProps {
  icon: string;
  w: number;
  h: number;
  title: string;
}

const contatData = [
  {
    icon: "mail",
    w: 21,
    h: 16,
    title: "support@skillbridge.com",
  },
  {
    icon: "phone",
    w: 21,
    h: 21,
    title: "+221 77 000 00 00",
  },
  {
    icon: "location",
    w: 16,
    h: 20,
    title: "Dakar",
  },
];

const ContactCard = ({ icon, w, h, title }: ContactCardProps) => {
  return (
    <div className="mt-9 flex flex-col items-center gap-5 rounded-lg border-2 border-gray-100 bg-gray-200 p-_30">
      <div
        className="relative"
        style={{
          width: `${w}px`,
          height: `${h}px`,
        }}
      >
        <Image src={`/img/${icon}.png`} alt="" fill />
      </div>
      <Typography variant="p" paragraphSize="xs">
        {title}
      </Typography>
    </div>
  );
};

const Social = () => {
  return (
    <ul className="flex gap-_14">
      {socials.map(({ href, icon }, key) => (
        <Link href={href} key={key}>
          <li className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200">
            <div className="relative h-5 w-5">
              <Image src={icon} alt="logo" fill />
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export function SocialLinks() {
  return (
    <div className="md:p-_60 flex flex-col gap-_50 p-4 md:w-_519 md:!pl-0 2xl:p-20">
      {contatData.map(({ icon, w, h, title }, key) => (
        <ContactCard key={key} icon={icon} w={w} h={h} title={title} />
      ))}

      <div className="flex flex-col items-center justify-center border-2 border-gray-100 bg-gray-200 p-_30">
        <Social />

        <Typography variant="p" paragraphSize="xs" className="mt-_10">
          Social Profiles
        </Typography>
      </div>
    </div>
  );
}
