import { ClassValue, clsx } from "clsx";
import { Platform } from "react-native";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isAndroid = Platform.OS === "android";

export const isIos = Platform.OS === "ios";
