import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";

interface ListItemProps extends TouchableOpacityProps {
  description?: string;
  rightLabel?: string;
  left?: React.ReactNode;
  children?: React.ReactNode;
  right?: React.ReactNode;

  containerClassName?: string;
  leftClassName?: string;
  rightClassName?: string;
  childrenContainerClassName?: string;
  descriptionClassName?: string;
  rightLabelClassName?: string;
}

const ListItem = ({
  left,
  children,
  right,
  rightLabel,
  description,

  containerClassName,
  leftClassName,
  rightClassName,
  childrenContainerClassName,
  descriptionClassName,
  rightLabelClassName,
  ...rest
}: ListItemProps) => {
  return (
    <TouchableOpacity
      className={`flex-row gap-3 bg-customLightGrey border border-gray-100 rounded-lg p-3 px-2 pr-3 items-center ${containerClassName}`}
      disabled
      {...rest}
    >
      {/* left item */}
      <View className={`flex items-center justify-center ${leftClassName}`}>
        {left}
      </View>

      {/* middle ite */}
      <View className={`flex-1 ${childrenContainerClassName}`}>
        {description ? (
          <Text
            className={`font-400 text-[13px] text-customGrey ${descriptionClassName}`}
          >
            {description}
          </Text>
        ) : (
          children
        )}
      </View>

      {/* right element */}
      <View className={`flex items-center justify-center ${rightClassName}`}>
        {rightLabel ? (
          <Text
            className={`font-400 text-sm text-primary ${rightLabelClassName}`}
          >
            {rightLabel}
          </Text>
        ) : (
          right
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
