import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string | null;
  left?: React.ReactNode;
  right?: React.ReactNode;

  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  inputContainerClassName?: string;
  inputClassName?: string;
}

const Input = ({
  label,
  error,
  left,

  labelClassName,
  errorClassName,
  containerClassName,
  inputContainerClassName,
  inputClassName,
  ...rest
}: InputProps) => {
  const errorInputStyle = error ? "border-red-600" : "border-gray-200";
  return (
    <View className={`${containerClassName}`}>
      {label ? (
        <Text
          className={`font-500 mb-1 text-base text-black ${labelClassName}`}
        >
          {label}
        </Text>
      ) : null}

      <View
        className={`min-h-[48] rounded-lg bg-customLightGrey flex-row overflow-hidden border ${errorInputStyle} ${inputContainerClassName}`}
      >
        {left}

        <TextInput
          className={`flex-1 px-3  font-400 text-base text-black pt-1 ${inputClassName}`}
          placeholder="Type here"
          style={{ textAlignVertical: "center" }}
          placeholderTextColor={"#ABABAB"}
          {...rest}
        />
      </View>

      {error ? (
        <Text
          className={`font-400 text-sm mt-1 text-red-600 ${errorClassName}`}
        >
          {error}
        </Text>
      ) : null}
    </View>
  );
};

export default Input;
