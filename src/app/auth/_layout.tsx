import { NativeStackHeaderLeftProps } from "@react-navigation/native-stack";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

import ArrowLeftSvg from "../../svg/arrow-left";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          ...navigationOptionsWithBack,
          title: "",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          ...navigationOptionsWithBack,
          title: "Create Account",
        }}
      />
      <Stack.Screen
        name="verification"
        options={{
          ...navigationOptionsWithBack,
          title: "Verify Account",
        }}
      />
    </Stack>
  );
};

export default Layout;

const renderHeaderLeft = (props: NativeStackHeaderLeftProps) => (
  <HeaderLeft {...props} />
);

const navigationOptionsWithBack = {
  headerLeft: renderHeaderLeft,
  headerShadowVisible: false,
  headerTitleStyle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
  },
  headerTitleAlign: "center" as "center",
};

export const HeaderLeft = ({ canGoBack }: NativeStackHeaderLeftProps) => {
  const router = useRouter();

  const handleGoBack = () => {
    if (canGoBack) {
      router.back();
    } else {
      router.push("/(app)");
    }
  };

  return (
    <TouchableOpacity
      onPress={handleGoBack}
      className="flex-row items-center px-2.5"
    >
      <ArrowLeftSvg />
    </TouchableOpacity>
  );
};
