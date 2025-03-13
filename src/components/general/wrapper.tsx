import { cn } from "@/utils";
import React from "react";
import { ScrollView, ScrollViewProps, View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  const { top } = useSafeAreaInsets();

  const defaultClassName = `flex-1 bg-white p-7 ]`;

  if (isScrollable) {
    return (
      <ScrollView
        className={cn(defaultClassName, className)}
        {...props}
        contentContainerStyle={{ paddingTop: top }}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <View
      className={cn(defaultClassName, className, `top-[${top}px]`)}
      style={{ top: top }}
    >
      {children}
    </View>
  );
};

export default Wrapper;
