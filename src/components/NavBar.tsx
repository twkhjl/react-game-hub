import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchInput from "./searchInput";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  onEnterSearchString: (searchString: string) => void;
}

const NavBar = ({ onEnterSearchString }: Props) => {
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
        <SearchInput
          onEnterSearchString={(value: string) => onEnterSearchString(value)}
        ></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;
