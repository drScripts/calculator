import React from "react";
import { Button } from "native-base";

const Calculatorboxitem = ({ value = "0", isDark = false, onClick }) => {
  const onPress = () => {
    onClick(value);
  };

  return (
    <Button
      boxSize="20%"
      h="16"
      bg={isDark ? "danger.800" : "danger.400"}
      justifyContent="center"
      alignItems="center"
      borderRadius="md"
      _text={{
        color: "primary.50",
        fontSize: "4xl",
      }}
      onPress={onPress}
    >
      {value}
    </Button>
  );
};

export default Calculatorboxitem;
