import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { CButton, CIcon, CInput, Wrapper } from "../../components/general";

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

      {/* icons */}
      <View className="gap-1">
        <View>
          <Text className=" font-600 leading-1 mt-1 text-lg">Icon</Text>
          <Text className="font-400 text-sm text-customGrey">
            {`<CIcon/>`}: src/components/general/icon
          </Text>
        </View>

        <View className="flex-row gap-3 py-2">
          <CIcon>
            <MaterialIcons
              name="local-laundry-service"
              size={20}
              color="black"
            />
          </CIcon>
          <CIcon variant="primary">
            <MaterialIcons
              name="local-laundry-service"
              size={20}
              color="white"
            />
          </CIcon>
          <CIcon variant="primaryLight">
            <MaterialIcons
              name="local-laundry-service"
              size={20}
              color={"blue"}
            />
          </CIcon>
        </View>
      </View>

      {/* list item */}
      <View></View>
    </Wrapper>
  );
};

export default components;
