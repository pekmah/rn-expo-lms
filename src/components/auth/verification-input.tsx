import { cn } from "@/utils";
import React, { useCallback, useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

interface VerificationInputProps {
  codeLength?: number;
  onCodeComplete?: (code: string) => void;
}

const VerificationInput = ({
  codeLength = 4,
  onCodeComplete,
}: VerificationInputProps) => {
  const [code, setCode] = useState("");
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const inputRef = useRef<TextInput>(null);

  const handlePress = () => {
    inputRef.current?.focus();
    setFocusedIndex(0);
  };

  const handleChange = useCallback(
    (text: string) => {
      const numericText = text.replace(/[^0-9]/g, "");
      if (numericText.length <= codeLength) {
        setCode(numericText);
        if (numericText.length === codeLength) {
          onCodeComplete?.(numericText);
        }
        setFocusedIndex(numericText.length - 1);
      }
    },
    [codeLength, onCodeComplete]
  );

  const renderBoxes = () => {
    const boxes = [];
    for (let i = 0; i < codeLength; i++) {
      boxes.push(
        <Pressable
          key={i}
          onPress={handlePress}
          className={cn(
            "flex-1 aspect-square rounded-[20px] border border-neutral-300 justify-center items-center bg-bg max-h-[72px] shadow-xs",
            i === focusedIndex && "border-primary border-[1.5px] shadow-md",
            code[i] && "bg-bg"
          )}
        >
          <Text
            className={cn(
              "text-2xl font-inter-semibold text-neutral-600",
              i === focusedIndex && "text-primary"
            )}
          >
            {code[i] || ""}
          </Text>
        </Pressable>
      );
    }
    return boxes;
  };

  return (
    <View className="flex-1 items-center justify-center">
      <View className="flex-row justify-center gap-5">{renderBoxes()}</View>
      <TextInput
        ref={inputRef}
        value={code}
        onChangeText={handleChange}
        keyboardType="number-pad"
        maxLength={codeLength}
        className="absolute opacity-0 w-px h-px"
        onFocus={() => setFocusedIndex(code.length - 1)}
        onBlur={() => setFocusedIndex(-1)}
      />
    </View>
  );
};

export default VerificationInput;
