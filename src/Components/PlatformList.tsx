import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformList = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    playstation5: FaPlaystation,
    playstation4: FaPlaystation,
    playstation3: FaPlaystation,
    pc: FaWindows,
    xbox360: FaXbox,
    "x-box-one": FaXbox,
    macos: FaApple,
    linux: FaLinux,
    "nintendo-switch": SiNintendo,
    android: FaAndroid,
    ios: MdPhoneIphone,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((p) => (
        <Icon as={IconMap[p.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformList;
