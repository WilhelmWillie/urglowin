import React from "react";
import styled from "styled-components";

const SaveButton = styled.button`
  background: ${({unsave}) => unsave ? '#3298F9' : 'transparent'};
  border: 1px solid #3298F9;
  border-radius: 8px;
  font-size: 18px;
  font-family: MabryPro;
  color: ${({unsave}) => unsave ? '#FFFFFF' : '#3298F9'};;
  padding: 18px 64px;
  display: inline-block;
  align-self: flex-start;
  margin-top: 24px;
  cursor: pointer;
`;

export default SaveButton;