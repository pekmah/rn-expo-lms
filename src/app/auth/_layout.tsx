import { Stack } from "expo-router";
import React from "react";

import { navigationOptionsWithBack } from "@/constants/navigation";

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
