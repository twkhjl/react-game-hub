import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize={"80px"} marginX={2} marginY={5} />
      </HStack>
    </>
  );
};

export default NavBar;
