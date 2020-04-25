import styled from "styled-components";
import Link from "next/link";

import { Container } from "./style";

import LogoSVG from "../assets/logo.svg";

import { Row } from "./style";

const NavBar = () => {
  return (
    <Wrapper>
      <Container>
        <Row align="center">
          <Link href="/" passHref>
            <Logo src={LogoSVG} />
          </Link>

          <Link href="/" passHref>
            <A>Home</A>
          </Link>

          <Link href="/explore" passHref>
            <A>Explore</A>
          </Link>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 24px 0;
`;

const Logo = styled.img`
  height: 24px;
  cursor: pointer;
`;

const A = styled.a`
  text-decoration: none;
  color: #1E1E1E;
  margin-left: 32px;
  cursor: pointer;
`;

export default NavBar;