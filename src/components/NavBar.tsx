import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchInput from "./searchInput";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <>
      <HStack padding={"10px"}>
        <Image
          src={logo}
          boxSize={{
            base: "60px",
            lg: "120px",
          }}
          marginX={2}
          marginY={5}
        />
        <SearchInput></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;
