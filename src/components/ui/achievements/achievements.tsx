import Typography from "@/components/typography";
import { features } from "@/constants";
import Image from "next/image";
import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  w: number;
  h: number;
}

const Card = ({ icon, title, description, w, h }: CardProps) => {
  return (
    <div className="ga rounded-xl bg-white p-_30 lg:p-10 2xl:p-_50">
      <div className="flex h-16 w-16 items-center justify-center rounded-md border border-primary-200 bg-primary-100">
        <div
          className="relative"
          style={{
            width: `${w}px`,
            height: `${h}px`,
          }}
        >
          <Image src={`/img/${icon}.png`} alt="icon" fill />
        </div>
      </div>

      <Typography
        variant="h2"
        headingSize="sm"
        className="mt-_30 font-semibold"
      >
        {title}
      </Typography>
      <Typography variant="p" headingSize="sm" className="mt-_14">
        {description}
      </Typography>
    </div>
  );
};

export const Achievements = () => {
  return (
    <section className="layout">
      <div>
        <Typography variant="h2" headingSize="sm" className="font-semibold">
          Achievements
        </Typography>
        <Typography variant="p" paragraphSize="sm">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </Typography>
      </div>

      <div className="mt-20 grid gap-_30 md:grid-cols-2">
        {features.map(({ icon, title, description, w, h }, key) => (
          <Card
            key={key}
            icon={icon}
            title={title}
            description={description}
            w={w}
            h={h}
          />
        ))}
      </div>
    </section>
  );
};
