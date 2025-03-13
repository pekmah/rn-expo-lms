import { AuthInput, Wrapper } from "@/components/general";
import React from "react";
import { Text } from "react-native";

const ShopDetails = () => {
  return (
    <Wrapper className="py-1">
      <Text className=" text-customGrey font-400 text-[13px]">
        Please enter the shop details below to get more information about your
        shop.
      </Text>

      <AuthInput label="Email" placeholder="youremail@mail.com" />
    </Wrapper>
  );
};

export default ShopDetails;
