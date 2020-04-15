import React from 'react';
import styled from 'styled-components';

import StarSVG from '../assets/star.svg';

const ProductDetailSectionHeader = ({ children }) => {
  return (
    <Header>
      <Star src={StarSVG} />
      
      <h2>{children}</h2>

      <Star src={StarSVG} />
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  h2 {
    font-family: GintoNord;
    color: #1E1E1E;
    font-size: 18px;
    text-transform: uppercase;
  }
`;

const Star = styled.img`
  margin: 0px 16px;
`;

export default ProductDetailSectionHeader;