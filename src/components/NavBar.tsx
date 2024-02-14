import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  onEnterSearchString: (searchString: string) => void;
}

const NavBar = ({ onEnterSearchString }: Props) => {
  return (
    <>
      <HStack
        position="fixed"
        width={"100%"}
        height={"100px"}
        zIndex={"100"}
        backgroundColor="rgba(255, 
        255, 255, 0.4)"
        backdropFilter="saturate(180%) blur(5px)"
        padding={"10px"}
      >
        <Image
          src={logo}
          boxSize={{
            base: "60px",
            lg: "120px",
          }}
          marginX={2}
          marginTop={"25px"}
        />
        <SearchInput
          onEnterSearchString={(value: string) => onEnterSearchString(value)}
        ></SearchInput>
        <Box marginRight={0} marginLeft={"auto"}>
          <ColorModeSwitch></ColorModeSwitch>
        </Box>
      </HStack>
    </>
  );
};

export default NavBar;
