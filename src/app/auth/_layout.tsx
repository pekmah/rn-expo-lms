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
          title: "",
          headerLeft: renderHeaderLeft,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 20,
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default Layout;
const renderHeaderLeft = (props: NativeStackHeaderLeftProps) => (
  <HeaderLeft {...props} />
);

const HeaderLeft = ({ canGoBack }: NativeStackHeaderLeftProps) => {
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
