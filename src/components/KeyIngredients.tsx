import styled from "styled-components";

import { Container, Row, Column } from "./style";

import ProductDetailSectionHeader from "./ProductDetailSectionHeader";

const KeyIngredients = ({ product }) => {
  const IngredientsList = product.fullIngredientList.slice(0,5).map((ingredient, index) => (
    <Ingredient key={`ing-${product._id}-${index}`}>{ingredient}</Ingredient>
  ));

  return (
    <Wrapper>
      <Container>
        <ProductDetailSectionHeader>Ingredients</ProductDetailSectionHeader>

        <Ingredients>
          <IngredientsListWrapper>
            {IngredientsList}

            {
              product.fullIngredientList.length > 5 && (<Ingredient fade>... and more</Ingredient>)
            }
          </IngredientsListWrapper>
        </Ingredients>

        <IngredientListLink href={product.ingredientsUrl} target="_blank">Full Ingredient List</IngredientListLink>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 64px 0;
`;

const Ingredient = styled.p`
  margin: 12px 0;

  ${({fade}) => fade && 'opacity: 0.5;'}
`;

const Ingredients = styled.div`
  padding: 32px 0px;
  background-color: #F6F6F6;
  max-width: 768px;
  margin: 48px auto 0;
`;

const IngredientsListWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const IngredientListLink = styled.a`
  font-family: GintoNord;
  font-size: 14px;
  display: block;
  color: #3298F9;
  text-align: center;
  margin-top: 42px;
`;

export default KeyIngredients;