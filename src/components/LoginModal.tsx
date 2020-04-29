import { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";

import FacebookLogo from "../assets/fb_logo.svg";
import { AppStore } from "../stores";

import Modal from "./Modal";

const LoginModal = () => {
  const appState = useContext(AppStore);
  const { state: { showLoginModal }, dispatch } = appState;

  const closeModal = () => {
    dispatch({ type: 'TOGGLE_LOGIN_MODAL' });
  }

  return (
    <Modal showModal={showLoginModal} closeModal={closeModal}>
        <h1>Hello!</h1>

        <p>Select a method below to sign into URGLOWIN.</p>

        <Link href="/auth/facebook" passHref>
          <LoginButton onClick={closeModal}>
            <img src={FacebookLogo} />
            Continue with Facebook
          </LoginButton>
        </Link>
    </Modal>
  );
}

const LoginButton = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #1778F2;
  padding: 12px;
  color: #585858;

  img {
    margin-right: 12px;
  }
`;

export default LoginModal;