import React from "react";
import { Text, View } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import { CButton, CIcon, CInput, Wrapper } from "../../components/general";
import ListItem from "@/components/general/list-item";
import { WashingMachineSvg } from "@/svg";

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
          <CButton text="Button" variant="primary" />

          <CButton text="Button" variant="primaryLight" />
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
          <CInput
            inputClassName="pl-1"
            placeholder="Search ..."
            inputContainerClassName="bg-primary px-1"
            left={
              <View className="flex-row items-center justify-center">
                <CIcon>
                  <Feather color={"#ABABAB"} name="search" size={20} />
                </CIcon>
              </View>
            }
          />
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
      <View className="gap-1">
        <View>
          <Text className=" font-600 leading-1 mt-1 text-lg">Icon</Text>
          <Text className="font-400 text-sm text-customGrey">
            {`<CListItem/>`}: src/components/general/icon
          </Text>
        </View>

        {/* list items */}
        <View className="gap-3">
          <ListItem
            left={
              <CIcon>
                <WashingMachineSvg />
              </CIcon>
            }
            description="Eric Pekmah laundry"
            rightLabel="3 mins Left"
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default components;
