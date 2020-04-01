import styled from "styled-components";

import { Container } from "./style";

import LogoSVG from "../assets/logo.svg";

const NavBar = () => {
  return (
    <Wrapper>
      <Container>
        <Logo src={LogoSVG} />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 24px 0;
`;

const Logo = styled.img`
  height: 24px;
`;

export default NavBar;