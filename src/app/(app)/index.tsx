import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  if (true) {
    return <Redirect href={"/components"} />;
  }

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-700">WELCOME TO FUA LAUNDRY </Text>
    </View>
  );
}
