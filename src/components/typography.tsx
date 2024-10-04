import React from "react";
import clsx from "clsx";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "p" | "span";
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold",
  h2: "text-base md:text-4xl 2xl:text-5xl font-semibold",
  h3: "text-xl md:text-3xl 2xl:text-4xl font-medium",
  p: "text-base 2xl:text-lg",
  span: "text-sm sm:text-base md:text-lg lg:text-xl",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  children,
  className,
}) => {
  const Component = variant;

  return (
    <Component className={clsx(variantStyles[variant], className)}>
      {children}
    </Component>
  );
};
