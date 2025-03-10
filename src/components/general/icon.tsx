import React from "react";
import { View } from "react-native";

type Variant = "default" | "primary" | "primaryLight";

interface IconProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const Icon = ({ children, variant, className }: IconProps) => {
  const variantStyles = {
    default: "aspect-square h-8 flex items-center justify-center rounded-sm",
    primary: "bg-primary",
    primaryLight: "bg-primaryLight",
  };

  return (
    <View
      className={`
        ${variantStyles.default}
        ${variant ? variantStyles[variant] : ""}
        ${className}
      `}
    >
      {children}
    </View>
  );
};

export default Icon;
