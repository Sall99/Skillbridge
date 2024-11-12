import React from "react";
import Typography from "./typography";
import { Button } from "./ui";

interface Props {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: Props) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-5 lg:mb-_62 lg:flex-row lg:gap-_300 xl:items-center 2xl:mb-20">
      <div className="max-w-_1117">
        <Typography
          variant="h2"
          headingSize="md"
          className="mb-4 font-semibold"
        >
          {title}
        </Typography>
        <Typography variant="p" className="text-gray-500">
          {description}
        </Typography>
      </div>
      <div>
        <Button variant="secondary" size="medium" className="w-_168">
          View all
        </Button>
      </div>
    </div>
  );
}
