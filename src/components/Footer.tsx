import styled from "styled-components";
import Link from "next/link";

import { Container, Row } from "./style";

import LogoSVG from "../assets/logo.svg";
import Instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row justify="space-between">
          <CopyrightAndLogo>
            <Link href="/">
              <Logo src={LogoSVG} />
            </Link>

            <p>&copy; 2020 URGLOWIN. All rights reserved.</p>
          </CopyrightAndLogo>

          <SocialLink href="https://www.instagram.com/urglow.in/" target="_blank">
            <SocialLogo src={Instagram} />
          </SocialLink>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 48px 0;
  background: #F6F6F6;
`;

const Logo = styled.img`
  height: 14px;
  cursor: pointer;
  margin-right: 16px;
`;

const CopyrightAndLogo = styled.div`
  display: flex;
  flex-direction: row;

  p {
    font-size: 14px;
  }
`;

const SocialLink = styled.a``;

const SocialLogo = styled.img`
  width: 24px;
`;

export default Footer;