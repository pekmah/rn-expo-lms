import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import { VerificationInput } from "@/components/auth";
import { CButton, Wrapper } from "@/components/general";

const Page = () => {
  return (
    <Wrapper isScrollable className="py-2 gap-5 border border-t-slate-200">
      <Text className=" text-customGrey font-400 text-[13px] leading-6">
        Please enter the code we just sent to email{" "}
        <Text className="font-500 text-black">y*******@mail.com</Text>
      </Text>

      <View className="my-5 pt-5 gap-5">
        <VerificationInput />
      </View>

      <CButton
        variant="primary"
        className="my-5 rounded-full"
        text="Verify Account"
      />

      {/* Don't have account text */}
      <Text className="text-center font-400 text-[13px] text-gray-500">
        Did not receive code ?{" "}
        <Link asChild href="/auth">
          <Text className="text-primary font-poppins-medium underline">
            Resend code
          </Text>
        </Link>
      </Text>
    </Wrapper>
  );
};

export default Page;
