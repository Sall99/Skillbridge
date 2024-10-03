import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  variant = "primary",
  className,
  onClick,
}) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-6 py-3 text-sm 2xl:text-lg 2xl:px-_34 2xl:py-_14",
    large: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-primary-500 text-white",
    secondary: "bg-gray-200 text-black",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-md font-medium transition-all duration-500 ease-in-out hover:bg-primary-400",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};
