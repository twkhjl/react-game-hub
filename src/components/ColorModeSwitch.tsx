import { HStack, useColorMode } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaRegSun, FaMoon } from "react-icons/fa6";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      {colorMode === "light" ? "" : <Icon as={FaMoon} boxSize={6} />}
      <Switch onChange={toggleColorMode} colorScheme="green" size="lg" />
      {colorMode === "dark" ? "" : <Icon as={FaRegSun} boxSize={6} />}
    </HStack>
  );
};

export default ColorModeSwitch;
