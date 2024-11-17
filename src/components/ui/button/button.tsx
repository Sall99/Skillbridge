import React from "react";
import clsx from "clsx";
import Image from "next/image";

type ButtonProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  iconSrc?: string;
  icon?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  variant = "primary",
  className,
  onClick,
  type = "button",
  icon = false,
  iconSrc,
}) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-6 py-3 text-sm 2xl:text-lg 2xl:px-_34 2xl:py-_14",
    large: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-primary-500 text-white hover:bg-primary-400",
    secondary: "text-black font-medium bg-gray-200 border-2 border-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center gap-8 rounded-md font-medium transition-all duration-500 ease-in-out",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {icon && (
        <div className="relative h-6 w-6">
          <Image src={iconSrc || ""} alt="" fill />
        </div>
      )}
      <p>{children}</p>
    </button>
  );
};
