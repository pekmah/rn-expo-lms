import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* index */}
      <Stack.Screen name="index" />
      {/* components */}
      <Stack.Screen name="components" />
    </Stack>
  );
}
