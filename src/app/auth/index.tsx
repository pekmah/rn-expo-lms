import React, { useCallback } from "react";
import { Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { AuthInput, CButton, Wrapper } from "@/components/general";
import { GoogleSvg } from "@/svg";

const Page = () => {
  const router = useRouter();

  const handleSignin = useCallback(() => {
    router.push("/(app)/tabs");
  }, [router]);

  const handleGoogleSignIn = useCallback(async () => {
    try {
      await GoogleSignin.signIn();
      handleSignin();
      // console.log("userinfo", userInfo);
    } catch (error) {
      console.log("error", error);
    }
  }, [handleSignin]);

  return (
    <Wrapper isScrollable className="py-0 gap-5">
      <View className="pb-3">
        <Text className=" font-600 leading-1 mt-1 text-2xl text-center mb-1">
          Welcome Back!
        </Text>
        <Text className=" text-customGrey font-400 text-[13px]">
          We are happy to see you again! Please log in to your account.
        </Text>
      </View>
      <View className="py-2 gap-5">
        <AuthInput label="Email" placeholder="youremail@mail.com" />

        <AuthInput label="Password" placeholder="Password" />
      </View>

      <CButton
        variant="primary"
        className="my-5 rounded-full"
        text="Log In"
        onPress={handleSignin}
      />

      <CButton
        variant="default"
        className="mt-3 mb-5 border border-gray-300 rounded-full gap-3"
        text="Sign in with Google"
        textClassName="text-gray-900 font-500"
        left={<GoogleSvg />}
        onPress={handleGoogleSignIn}
      />

      {/* Don't have account text */}
      <Text className="text-center font-400 text-[13px] text-gray-500">
        Don't have an account?{" "}
        <Link asChild href="/auth/signup">
          <Text className="text-primary font-poppins-medium underline">
            Sign up
          </Text>
        </Link>
      </Text>
    </Wrapper>
  );
};

export default Page;
