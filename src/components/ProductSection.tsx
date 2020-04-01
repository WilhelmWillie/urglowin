import styled from "styled-components";

import { Container, Row, Column } from "./style";

type ProductSectionProps = {
  products?: Array<Object>;
}

type Product = {
  productName: string;
  brand: string;
  img: string;
  category: string;
  usedFor: string;
}

const ProductSection = ({ products } : ProductSectionProps) => {
  let ProductElements;

  if (products) {
    ProductElements = products.map((item : Product, index : number) => (
      <Product
        key={index}
        img={item.img}
        brand={item.brand}
        productName={item.productName}
        category={item.category}
        usedFor={item.usedFor}
      />
    ))
  }

  return (
    <Wrapper>
      <Container>
        <Gallery>
          {ProductElements}
        </Gallery>
      </Container>
    </Wrapper>
  )
}

const Product = (props : Product) => {
  return (
    <ProductWrapper>
      <ProductImg src={props.img} alt={props.productName} />

      <ProductBrand>{props.brand}</ProductBrand>
      <ProductName>{props.productName}</ProductName>
      <ProductUsedFor>{props.usedFor.split(",")[0]}</ProductUsedFor>
    </ProductWrapper>
  )
}

const Wrapper = styled.section`
  padding: 64px 0;
  background: #F7F7F7;
`;

const Gallery = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductWrapper = styled.div`
  overflow: auto;
  border-radius: 8px;
  background: #FFFFFF;
  padding: 16px;
  box-sizing: border-box;
  margin-bottom: 18px;
`;

const ProductImg = styled.img`
  max-height: 150px;
  margin: 0 auto 18px;
  text-align: center;
`;

const ProductBrand = styled.h3`
  color: #BBBBBB;
  text-transform: uppercase;
`;

const ProductName = styled.h3`
  color: #555555;
`;

const ProductUsedFor = styled.span`
  color: #FFFFFF;
  padding: 8px;
  background-color: #73CB5F;
  display: inline-block;
  margin-top: 8px;
  border-radius: 4px;
  flex: 0;
`;

export default ProductSection;