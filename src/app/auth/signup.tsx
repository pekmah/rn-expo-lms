import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";

import { AuthInput, CButton, Wrapper } from "@/components/general";
import { GoogleSvg } from "@/svg";

const Page = () => {
  return (
    <Wrapper isScrollable className="py-2 gap-5 border border-t-slate-200">
      <View className="py-1 gap-5">
        <AuthInput label="Name" placeholder="Your name" />

        <AuthInput label="Email" placeholder="youremail@mail.com" />

        <AuthInput label="Password" placeholder="Password" />

        <AuthInput label="Confirm Password" placeholder="Confirm Password" />
      </View>

      <CButton
        variant="primary"
        className="my-5 rounded-full"
        text="Create Account"
      />

      <CButton
        variant="default"
        className="mt-3 mb-5 border border-gray-300 rounded-full gap-3"
        text="Sign up with Google"
        textClassName="text-gray-900 font-500"
        left={<GoogleSvg />}
      />

      {/* Don't have account text */}
      <Text className="text-center font-400 text-[13px] text-gray-500">
        Already have an account?{" "}
        <Link asChild href="/auth">
          <Text className="text-primary font-poppins-medium underline">
            Log In
          </Text>
        </Link>
      </Text>
    </Wrapper>
  );
};

export default Page;
