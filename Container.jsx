import React, { useState } from "react";
import { Box, Heading, HStack, VStack, Button, Text } from "native-base";
import Calculatorboxitem from "./components/CalculatorBoxItem";

const Container = () => {
  const [lastVal, setLastVal] = useState(null);
  const [current, setCurrent] = useState(0);
  const [display, setDisplay] = useState(0);
  const [lastOperator, setLastOperator] = useState(null);

  const calculate = () => {
    let value;
    switch (lastOperator) {
      case "-":
        value = Number(lastVal) - Number(current);
        break;
      case "+":
        value = Number(lastVal) + Number(current);
        break;
      case "*":
        value = Number(lastVal) * Number(current);
        break;
      case "/":
        value = Number(lastVal) / Number(current);
        break;
      default:
        value = Number(lastVal) % Number(current);
        break;
    }

    setLastVal(value);
    setDisplay(value);
    setCurrent(0);
  };

  const operator = (operator) => {
    if (operator !== "=") {
      setCurrent(0);
      setDisplay(0);
      setLastOperator(operator);
      if (!lastVal) {
        setLastVal(current);
      }
    } else {
      calculate();
    }
  };

  const onChange = (value) => {
    if (Number(value) || Number(value) === 0) {
      let values = 0;
      if (current == 0) {
        values = value;
      } else {
        values = current + value;
      }

      setCurrent(values);
      setDisplay(values);
    } else {
      switch (value) {
        case "delete":
          const parsed = current.toString()?.slice(0, -1) || 0;
          setCurrent(parsed);
          setDisplay(parsed);
          break;
        case "clear":
          setCurrent(0);
          setDisplay(0);
          setLastVal(null);
          setLastOperator(null);
          break;
        default:
          operator(value);
          break;
      }
    }
  };

  return (
    <Box safeArea bg={"danger.200"} flex={1} px={5} py={4}>
      <HStack justifyContent="space-between">
        <Heading ml={2} mb={3} color="primary.50">
          Display
        </Heading>
        <Text ml={2} mb={3} color="secondary.900" alignSelf="flex-end">
          Operator : {lastOperator}
        </Text>
      </HStack>
      <Box
        w="100%"
        h="20"
        pr="5"
        borderRadius="lg"
        bg="primary.100"
        mb={5}
        _text={{
          color: "secondary.900",
          fontSize: "4xl",
        }}
        justifyContent="center"
        alignItems="flex-end"
      >
        {display}
      </Box>
      <VStack space="3">
        <HStack justifyContent="space-between">
          <Calculatorboxitem value="1" onClick={onChange} />
          <Calculatorboxitem value="2" onClick={onChange} />
          <Calculatorboxitem value="-" isDark onClick={onChange} />
          <Calculatorboxitem value="+" isDark onClick={onChange} />
        </HStack>
        <HStack justifyContent="space-between">
          <Calculatorboxitem value="3" onClick={onChange} />
          <Calculatorboxitem value="4" onClick={onChange} />
          <Calculatorboxitem value="/" isDark onClick={onChange} />
          <Calculatorboxitem value="*" isDark onClick={onChange} />
        </HStack>
        <HStack justifyContent="space-between">
          <Calculatorboxitem value="5" onClick={onChange} />
          <Calculatorboxitem value="6" onClick={onChange} />
          <Calculatorboxitem value="%" isDark onClick={onChange} />
          <Calculatorboxitem value="=" isDark onClick={onChange} />
        </HStack>
        <HStack justifyContent="space-between">
          <Calculatorboxitem value="7" onClick={onChange} />
          <Calculatorboxitem value="8" onClick={onChange} />
          <Calculatorboxitem value="9" onClick={onChange} />
          <Calculatorboxitem value="0" onClick={onChange} />
        </HStack>
        <HStack justifyContent="space-between">
          <Button
            w="45%"
            h="12"
            bg="danger.800"
            borderRadius="lg"
            alignItems="center"
            justifyContent="center"
            _text={{
              color: "primary.50",
              fontSize: "xl",
            }}
            onPress={() => onChange("clear")}
          >
            Clear
          </Button>
          <Button
            w="45%"
            h="12"
            bg="danger.800"
            borderRadius="lg"
            alignItems="center"
            justifyContent="center"
            _text={{
              color: "primary.50",
              fontSize: "xl",
            }}
            onPress={() => onChange("delete")}
          >
            Delete
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Container;
