import styled from "styled-components";
import Link from "next/link";

import { Container } from "./style";

import LogoSVG from "../assets/logo.svg";

const NavBar = () => {
  return (
    <Wrapper>
      <Container>
        <Link href="/">
          <Logo src={LogoSVG} />
        </Link>
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

export default NavBar;