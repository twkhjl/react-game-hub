import { HStack, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaRegSun, FaMoon } from "react-icons/fa6";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <HStack marginRight={0} marginLeft={"auto"}>
        {colorMode === "dark" && isLargeScreen && (
          <Icon as={FaMoon} boxSize={6} />
        )}
        <Switch onChange={toggleColorMode} colorScheme="green" size="lg" />
        {colorMode === "light" && isLargeScreen && (
          <Icon as={FaRegSun} boxSize={6} />
        )}
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
