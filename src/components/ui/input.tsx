"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type: "text" | "email" | "password" | "tel" | "number";
  label?: string;
  error?: string;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  error,
  helperText,
  multiline = false,
  rows = 5,
  className = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const baseInputStyles = `
    w-full px-5 py-5 rounded-lg border-2 bg-gray-200
    focus:outline-none focus:ring-2 focus:ring-primary-400
    disabled:bg-gray-100 disabled:cursor-not-allowed
    transition duration-200
    2xl:px-5 2xl:py-6
  `;

  const inputStateStyles = error
    ? "border-red-500 text-red-500 focus:border-red-500"
    : "border-gray-100 focus:border-primary-200";

  const InputElement = multiline ? "textarea" : "input";

  // Determine the actual input type for password fields
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="mb-4 block text-sm font-medium capitalize text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <InputElement
          {...props}
          type={multiline ? undefined : inputType}
          rows={multiline ? rows : undefined}
          className={`${baseInputStyles} ${inputStateStyles} ${className} ${
            type === "password" ? "pr-12" : ""
          }`}
          aria-invalid={error ? "true" : "false"}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {(error || helperText) && (
        <p
          className={`mt-1 text-sm ${error ? "text-red-500" : "text-gray-500"}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
