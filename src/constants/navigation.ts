import { renderHeaderLeft } from "@/components/navigation";

export const navigationOptionsWithBack = {
  headerShown: true,
  headerLeft: renderHeaderLeft,
  headerShadowVisible: false,
  headerTitleStyle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
  },
  headerTitleAlign: "center" as "center",
};
