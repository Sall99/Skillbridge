import React from "react";

import Typography from "./typography";
import { Button } from "./ui";
import clsx from "clsx";

interface Props {
  title: string;
  description: string;
  btnText?: string;
  variant?: "lg" | "md";
}

export function SectionHeader({
  title,
  description,
  btnText = "View all",
  variant = "lg",
}: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between gap-5 lg:flex-row lg:gap-_50 xl:items-center",
        variant === "lg" && "mb-10 lg:mb-_62 2xl:mb-20",
        variant === "md" && "mb-_10 lg:mb-6 2xl:mb-_30",
      )}
    >
      <div>
        <Typography
          variant="h2"
          headingSize={variant === "lg" ? "md" : "sm"}
          className="mb-4 font-semibold"
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          paragraphSize={variant === "lg" ? "md" : "sm"}
          className="text-gray-500"
        >
          {description}
        </Typography>
      </div>

      <Button
        variant="secondary"
        size="medium"
        className={clsx(variant === "md" ? "w-_168 xl:w-60" : "w-_168")}
      >
        {btnText}
      </Button>
    </div>
  );
}
