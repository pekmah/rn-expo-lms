import { NativeStackHeaderLeftProps } from "@react-navigation/native-stack";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

import ArrowLeftSvg from "@/svg/arrow-left";

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

export const renderHeaderLeft = (props: NativeStackHeaderLeftProps) => (
  <HeaderLeft {...props} />
);
