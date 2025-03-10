import React from "react";
import { ScrollView, View, ViewProps, ScrollViewProps } from "react-native";

type WrapperProps<T extends boolean = false> = {
  children: React.ReactNode;
  isScrollable?: T;
  className?: string;
} & (T extends true ? ScrollViewProps : ViewProps);

const Wrapper = <T extends boolean = false>({
  children,
  isScrollable,
  className = "",
  ...props
}: WrapperProps<T>) => {
  const defaultClassName = "flex-1 bg-white p-8";

  if (isScrollable) {
    return (
      <ScrollView className={`${defaultClassName} ${className}`} {...props}>
        {children}
      </ScrollView>
    );
  }

  return (
    <View className={`${defaultClassName} ${className}`} {...props}>
      {children}
    </View>
  );
};

export default Wrapper;
