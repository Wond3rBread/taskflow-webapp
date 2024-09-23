// src/components/atoms/Button.tsx

import React, { ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className,
}) => {
  const baseStyles =
    "rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary: "bg-secondary text-white hover:bg-gray-600 focus:ring-gray-500",
    outline:
      "border border-gray-500 text-gray-500 hover:bg-gray-100 focus:ring-gray-500",
  };
  
  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const buttonClasses = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    {
      "opacity-50 cursor-not-allowed": disabled,
    }
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
