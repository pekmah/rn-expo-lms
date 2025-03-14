import React from "react";
import { Text, View } from "react-native";

import { VerificationInput } from "@/components/auth";
import { CButton, Wrapper } from "@/components/general";
import { useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();

  const handleVerify = () => {
    router.replace("/");
  };

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
        onPress={handleVerify}
      />

      {/* Don't have account text */}
      <Text className="text-center font-400 text-[13px] text-gray-500">
        Did not receive code ?{" "}
        <Text className="text-primary font-poppins-medium underline">
          Resend code
        </Text>
      </Text>
    </Wrapper>
  );
};

export default Page;
