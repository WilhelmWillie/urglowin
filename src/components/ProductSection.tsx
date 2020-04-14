import React, { useContext } from "react";
import styled from "styled-components";

import { Container, Row, Column } from "./style";
import { SearchStore } from "../stores";

type ProductSectionProps = {
  products?: Array<Object>;
}

type Product = {
  productName: string;
  brand: string;
  imageUrl: string;
  category: string;
  usedFor: Array<string>;
  fullIngredientList: Array<string>;
  regularPrice: number;
}

const ProductSection = ({ products } : ProductSectionProps) => {
  const searchState = useContext(SearchStore);
  const { state } = searchState;
  
  let ProductElements, CategoryElements;

  if (products) {
    const filteredProducts = products.filter((product : Product) => {
      if (state.category && state.category !== 'All') {
        return product.category === state.category;
      }

      return true;
    });

    ProductElements = filteredProducts.map((item : any, index : number) => {
      return <Product
        key={`p-${item._id}`}
        imageUrl={item.imageUrl}
        brand={item.brand}
        productName={item.productName}
        category={item.category}
        usedFor={item.usedFor}
        fullIngredientList={item.fullIngredientList}
        regularPrice={item.regularPrice}
      />
    })
  }

  return (
    <Wrapper>
      <Container>
        <Gallery>
          {CategoryElements}
          {ProductElements}
        </Gallery>
      </Container>
    </Wrapper>
  )
}

const Product = (props : Product) => {
  const IngredientPreview = (
    <>
      <TopIngredient>{props.fullIngredientList[0]}</TopIngredient>
      <RemainingIngredients>+ {props.fullIngredientList.length - 1} more...</RemainingIngredients>
    </>
  );

  let ProductPriceIndicator;

  if (props.regularPrice < 20) {
    ProductPriceIndicator = (
      <ProductPrice><b>$</b>$$</ProductPrice>
    )
  } else if (props.regularPrice >= 20 && props.regularPrice <= 40) {
    ProductPriceIndicator = (
      <ProductPrice><b>$$</b>$</ProductPrice>
    )
  } else {
    ProductPriceIndicator = (
      <ProductPrice><b>$$</b>$</ProductPrice>
    )
  }

  return (
    <ProductWrapper>
      <ProductPreview>
        <ProductImg src={props.imageUrl} alt={props.productName} />
        <ProductDetails>
          <ProductUsedFor>{props.usedFor[0]}</ProductUsedFor>
          {IngredientPreview}
        </ProductDetails>
      </ProductPreview>

      <ProductBrandPrice>
        <ProductBrand>{props.brand}</ProductBrand>
        {ProductPriceIndicator}
      </ProductBrandPrice>
      <ProductName>{props.productName}</ProductName>

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
`;

const ProductPreview = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-bottom: 16px;
`;

const ProductDetails = styled.div`
  width: 50%;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 16px;
`;

const ProductImg = styled.img`
  display: block;
  max-height: 150px;
  max-width: 50%;
`;

const ProductBrandPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductBrand = styled.h3`
  color: #BBBBBB;
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: 8px;
  display: inline-block;
`;

const ProductPrice = styled.span`
  font-size: 14px;
  color: #888888;

  b {
    color: #73CB5F;
  }
`;

const ProductName = styled.h3`
  color: #555555;
  font-size: 14px;
`;

const TopIngredient = styled.h3`
  color: #1E1E1E;
  font-size: 18px;
  margin-top: 8px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-weight: 600;
`;

const RemainingIngredients = styled.h4`
  color: #888888;
  font-size: 14px;
  margin-top: 8px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-weight: 600;
`;

const ProductUsedFor = styled.span`
  color: #FFFFFF;
  padding: 8px;
  background-color: #73CB5F;
  border-radius: 4px;
  flex-shrink: 1;
  align-self: flex-start;
`;

export default ProductSection;