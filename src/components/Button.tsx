import styled from "styled-components";

const Button = styled.button`
  background: #3298F9;
  border: 0;
  border-radius: 8px;
  font-size: 18px;
  font-family: MabryPro;
  color: #FFFFFF;
  padding: 18px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  ${({outline}) => outline && `
    border: 2px solid #3298F9;
    background: transparent;
    color: #3298F9;
  `}
`;

export default Button;