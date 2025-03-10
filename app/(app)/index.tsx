import { Text, View } from "react-native";

export default function Index() {
  const colorClasses = [
    "bg-primary-100",
    "bg-primary-200",
    "bg-primary-300",
    "bg-primary-400",
    "bg-primary-500",
    "bg-primary-600",
    "bg-primary-700",
    "bg-primary-800",
    "bg-primary-900",
  ];

  return (
    <View className="flex-1 ">
      <Text className="bg-red-500">
        Edit app/index.tsx to edit this screen.
      </Text>
      <View className="flex-row flex-wrap gap-10">
        {colorClasses.map((colorClass, i) => (
          <View key={i} className={`w-20 h-20 ${colorClass}`} />
        ))}
      </View>
    </View>
  );
}
