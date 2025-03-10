import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonVariant = "primary" | "default" | "primaryLight"; // Add "primary" to ButtonVariant type

interface ButtonProps extends TouchableOpacityProps {
  variant: ButtonVariant;

  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

const Button = ({
  variant = "default",
  children,
  className,
  textClassName,
}: ButtonProps) => {
  const variantStyles = {
    default: "min-h-[48] justify-center items-center rounded-lg",
    primary: "bg-primary",
    primaryLight: "bg-primaryLight",
  };

  const variantTextStyles = {
    default: "text-white font-400 text-base mt-1 tracking-wide",
    primary: "font-poppins-medium",
    primaryLight: "text-primary font-400",
  };

  return (
    <TouchableOpacity
      className={`${variantStyles.default} ${variantStyles[variant]} ${className}`}
    >
      {children ? (
        children
      ) : (
        <Text
          className={`${variantTextStyles.default} ${variantTextStyles[variant]} ${textClassName}`}
        >
          Button
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
