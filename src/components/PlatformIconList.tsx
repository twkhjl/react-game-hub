import { HStack, Icon } from "@chakra-ui/react";

import { Platform } from "../hooks/useGames";

import { FaWindows } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";
import { FaPlaystation } from "react-icons/fa6";
import { FaXbox } from "react-icons/fa6";
import { FaAndroid } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  nintendo: SiNintendo,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  iphone: MdPhoneIphone,
  android: FaAndroid,
  web: BsGlobe,
};

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      <HStack marginTop={2}>
        {platforms.map((platform) => (
          <>
            <Icon as={iconMap[platform.slug]} opacity={0.3}></Icon>
          </>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
