import React from "react";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { ImMail4 } from "react-icons/im";
import { HStack } from "@chakra-ui/react";
import "../styles/Linkstack.css";

export function LinkStack() {
  return (
    <HStack
      color={"#69433c"}
      paddingTop={"48"}
      marginLeft={"44%"}
      marginRight={"44%"}
    >
      <a href="https://github.com/gpsss246">
        <FaGithub size="50px" className="animate roll delay-6"></FaGithub>
      </a>
      <a href="https://www.linkedin.com/in/gurpartap-singh-04a76a260/">
        <TiSocialLinkedinCircular
          size="70px"
          className="animate roll delay-7"
        />
      </a>
      <a href="mailto:gurpartap_singh@brown.com">
        <ImMail4 size="50px" className="animate roll delay-8" />
      </a>
    </HStack>
  );
}
