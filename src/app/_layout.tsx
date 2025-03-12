import {
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  useFonts,
} from "@expo-google-fonts/poppins";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "../global.css";

SplashScreen.preventAutoHideAsync();

GoogleSignin.configure({
  scopes: [],
  webClientId:
    "400175060463-dh8n9vd74ruu62vur90ovarh5asc099r.apps.googleusercontent.com",
  offlineAccess: true,
});

export default function Root() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
  });

  const loaded = fontsLoaded;

  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  {
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <Slot />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
