import React, { useContext } from 'react';
import styled from "styled-components";
import Link from "next/link";

import useUser from "../hooks/useUser";
import { Container, Row } from "./style";
import LogoSVG from "../assets/logo.svg";
import Button from "./Button";
import  { AppStore } from "../stores";

const NavBar = () => {
  const user = useUser();
  const appState = useContext(AppStore);
  const { dispatch } = appState;

  const showModal = () => {
    dispatch({ type: 'TOGGLE_LOGIN_MODAL' });
  }
  
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

          {
            !!user ? (
              <Link href="/profile" passHref>
                <Profile>
                  <img src={user.profilePic} />
                </Profile>
              </Link>
            ) : (
              <Login onClick={showModal}>Log In</Login>
            )
          }
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

  @media screen and (max-width: 768px) {
    margin-bottom: 18px;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #1E1E1E;
  margin-left: 32px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

const Login = styled(Button)`
  margin-left: auto;
  padding: 12px 24px;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin: 12px 0;
  }
`;

const Profile = styled.a`
  margin-left: auto;

  img {
    width: 44px;
    height: 44px;
    border-radius:  100%;
  }

  @media screen and (max-width: 768px) {
    margin: 18px auto 0;
  }
`;

export default NavBar;