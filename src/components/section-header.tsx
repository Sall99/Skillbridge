import React from "react";
import Typography from "./typography";
import { Button } from "./ui";

interface Props {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-between gap-5 lg:flex-row lg:gap-_300">
      <div className="max-w-_1117">
        <Typography variant="h2" className="mb-4">
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
