import React from "react";
import "../styles/Main.css";
import sword from "../images/image-2.png";
import drawing from "../images/screenshot.png";
import sun from "../images/sun.png";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { LinkStack } from "./LinksStack";

export function MainPage() {
  return (
    <div justifyContent="center" alignItems="center" className="body">
      <Flex
        direction="row"
        alignItems={"center"}
        marginTop={"50"}
        marginLeft={"10%"}
        marginRight={"10%"}
        paddingTop={"18"}
      >
        <div class="image-container fade delay-2">
          <img src={drawing} className="drawing" alt="avatar" width={"350px"} />
          <img src={sun} className="sun" alt="sun" />
        </div>
        <Stack direction="column" color={"inherit"} alignItems={"center"}>
          <h1
            rel="stylesheet"
            href="https://use.typekit.net/uvo6ndq.css"
            className="header fadeInUp-animation "
          >
            Gurpartap Singh
          </h1>
          <img
            src={sword}
            className="sword fade delay-3"
            alt="Dhup"
            width={400}
          />
        </Stack>
      </Flex>
      <p>
        {" "}
        (Hi! I am Gurpartap Singh, a student of Computer Science and Political
        Science at Brown University. This website is currently under
        construction!){" "}
      </p>
      <LinkStack className="icons fade delay-4" />
    </div>
  );
}
