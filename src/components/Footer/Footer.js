import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import { SocialIcons } from "../Header/HeaderStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:catzin21t@gmail.com">
            catzin21@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Good life with better software</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/mcatzin">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="www.linkedin.com/in/mario-catzin">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
