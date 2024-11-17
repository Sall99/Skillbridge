import React from "react";

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
          type={multiline ? undefined : type}
          rows={multiline ? rows : undefined}
          className={`${baseInputStyles} ${inputStateStyles} ${className}`}
          aria-invalid={error ? "true" : "false"}
        />
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
