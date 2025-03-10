import React from "react";
import { Text, View } from "react-native";

import { CButton, CInput, Wrapper } from "../../components/general";

const components = () => {
  return (
    <Wrapper isScrollable contentContainerClassName="gap-5">
      {/* Buttons */}
      <View className="gap-1">
        <View>
          <Text className=" font-600 leading-1 mt-1 text-lg">Buttons</Text>
          <Text className="font-400 text-sm text-customGrey">
            {`<CButton variant={default | primary | primaryLight} />`}:
            src/components/general/button
          </Text>
        </View>

        <View className="gap-3">
          <CButton variant="primary" />

          <CButton variant="primaryLight" />
        </View>
      </View>

      {/* Inputs */}
      <View className="gap-1">
        <View>
          <Text className=" font-600 leading-1 mt-1 text-lg">Inputs</Text>
          <Text className="font-400 text-sm text-customGrey">
            {`<CInput/>`}: src/components/general/input
          </Text>
        </View>

        <View className="gap-3">
          <CInput label="Phone" />
          <CInput label="Error" error={"This is an error input message"} />
        </View>
      </View>
    </Wrapper>
  );
};

export default components;
