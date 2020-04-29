import { FunctionComponent } from "react";
import { useEffect, ReactChild } from "react";
import styled from "styled-components";

type ModalProps = {
  showModal: boolean;
  closeModal: Function;
  maxWidth?: number;
}

const Modal : FunctionComponent<ModalProps> = ({ showModal, closeModal, children, maxWidth }) => {
  // Prevent scrolling when modal is shown
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showModal]);

  return showModal ? (
    <FullScreenWrapper>
      <Background onClick={closeModal} />

      <ModalBody maxWidth={maxWidth}>
        <Close onClick={closeModal}>Close</Close>

        {children}
      </ModalBody>
    </FullScreenWrapper>
  ) : (
    null
  );
}

const FullScreenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
`;

const ModalBody = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  z-index: 5;
  padding: 48px;
  text-align: center;
  max-height: 80vh;
  overflow-y: scroll;

  ${({maxWidth}) => maxWidth && `max-width: ${maxWidth}px;`}

  p {
    margin: 24px 0;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Close = styled.a`
  display: block;
  text-align: right;
  margin-bottom: 16px;
  margin-top: -12px;
  cursor: pointer;
  color: #3298F9;
  font-size: 18px;
`;

export default Modal;