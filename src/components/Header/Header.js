import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssDeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from ".HeaderStyles.js";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItem: "center", color: "white" }}>
          <DiCssDeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
  </Container>
);

export default Header;
