import styled from "styled-components";

import { Container, Row, Column } from "./style";

const ProductDetails = ({ product }) => {
  const usedFor = product.usedFor.map((usedFor) => (
    <ProductBarDetailPill key={usedFor} bg="#B1D9FF">
      {usedFor}
    </ProductBarDetailPill>
  ));

  return (
    <Wrapper>
      <Container>
        <Row justify="space-between">
          <Column width={"35%"}>
            <ProductImage src={product.imageUrl} />
          </Column>

          <Column width={"62%"}>
            <ProductBrand>{product.brand}</ProductBrand>
            <ProductHeader>{product.productName}</ProductHeader>
            <ProductDescriptionHeader>From the brand</ProductDescriptionHeader>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductSize>{product.size} mL / {(product.size/29.5857).toFixed(2)} fl oz</ProductSize>

            <ProductBar>
              <ProductBarDetail>
                <h4>Category</h4>

                <ProductBarDetailPill>{product.category}</ProductBarDetailPill>
              </ProductBarDetail>

              <ProductBarDetail>
                <h4>Used For</h4>

                {usedFor}
              </ProductBarDetail>

              <ProductBarDetail>
                <h4>Price</h4>

                <ProductBarDetailPrice>${product.regularPrice}</ProductBarDetailPrice>
              </ProductBarDetail>

              <ProductBarDetail>
                <h4>Link to Buy</h4>

                <ProductBarDetailLink target="_blank" href={product.ingredientsUrl}>{product.brand}</ProductBarDetailLink>
              </ProductBarDetail>
            </ProductBar>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 64px 0;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ProductBrand = styled.h2`
  font-family: GintoNord;
  font-size: 18px;
  color: #1E1E1E;
`;

const ProductHeader = styled.h1`
  font-family: GintoNord;
  font-size: 48px;
  color: #1E1E1E;
  margin: 16px 0;
`;

const ProductDescriptionHeader = styled.h3`
  font-family: GintoNord;
  font-size: 14px;
  color: #555555;
  margin: 24px 0 16px;
  text-transform: uppercase;
`;

const ProductDescription = styled.p`
  font-size: 18px;
  color: #555555;
  border-left: 3px solid #3298F9;
  padding-left: 16px;
  font-weight: 400;
`;

const ProductSize = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin-top: 16px;
`;

const ProductBar = styled.div`
  display: flex;
  flex-direction: row;
  background: #F6F6F6;
  margin-top: 32px;
  justify-content: space-around;
  border-radius: 8px;
`;

const ProductBarDetail = styled.div`
  flex-basis: 24.5%;
  box-sizing: border-box;
  padding: 24px 12px;
  text-align: center;

  h4 {
    font-family: GintoNord;
    font-size: 14px;
    color: #555555;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
`;

const ProductBarDetailPill = styled.span`
  font-family: GintoNord;
  font-size: 12px;
  display: inline-block;
  color: #FFFFFF;
  background-color: ${({bg}) => bg ? bg : '#1E1E1E'};
  padding: 6px 10px;
  border-radius: 4px;
  margin-bottom: 6px;
`;

const ProductBarDetailPrice = styled.span`
  display: block;
  color: #555555;
`;

const ProductBarDetailLink = styled.a`
  font-family: GintoNord;
  font-size: 14px;
  display: block;
  color: #3298F9;
`;

export default ProductDetails;