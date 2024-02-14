import { HStack, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaRegSun, FaMoon } from "react-icons/fa6";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <HStack>
        {colorMode === "dark" && isLargeScreen && (
          <Icon as={FaMoon} boxSize={6} />
        )}
        <Switch onChange={toggleColorMode} size="lg" colorScheme="yellow" />
        {colorMode === "light" && isLargeScreen && (
          <Icon as={FaRegSun} boxSize={6} />
        )}
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
