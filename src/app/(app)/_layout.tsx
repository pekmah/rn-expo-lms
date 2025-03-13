import { navigationOptionsWithBack } from "@/constants/navigation";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* index */}
      <Stack.Screen name="index" />

      <Stack.Screen name="tabs" />

      {/* components */}
      <Stack.Screen name="components" />

      <Stack.Screen
        name="shop-details"
        options={{
          ...navigationOptionsWithBack,
          title: "Create Shop",
        }}
      />
    </Stack>
  );
}
