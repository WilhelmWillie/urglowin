import styled from "styled-components";

import { Container, Row, Column } from "./style";

import ProductDetailSectionHeader from "./ProductDetailSectionHeader";

const HowToUse = ({ product }) => {
  const IngredientsList = product.fullIngredientList.slice(0,5).map((ingredient, index) => (
    <Ingredient key={`ing-${product._id}-${index}`}>{ingredient}</Ingredient>
  ));

  let containsRetinol = false;

  product.fullIngredientList.forEach(ingredient => {
    if (ingredient.toLowerCase().indexOf('retinol') >= 0) {
      containsRetinol = true;
    }
  });

  return (
    <Wrapper>
      <Container>
        <ProductDetailSectionHeader>How To Use</ProductDetailSectionHeader>

        {containsRetinol && (
          <RetinolWarning>
            <p><b>Sensitivities:</b> This product contains retinol, which should not be used with pure vitamin C and other direct acids. It may cause a negative reaction!</p>
          </RetinolWarning>
        )}

        <InstructionHeader>Instructions from the Brand</InstructionHeader>
        <Instructions>{product.instructions}</Instructions>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 64px 0;
  background: #F6F6F6;
`;

const Ingredient = styled.p`
  margin: 12px 0;

  ${({fade}) => fade && 'opacity: 0.5;'}
`;

const InstructionHeader = styled.h3`
  font-family: GintoNord;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  margin: 24px 0;
  color: #555555;
`;

const Instructions = styled.p`
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
`;

const RetinolWarning = styled.div`
  padding: 24px;
  background: #FFFFFF;
  margin: 32px auto;
  max-width: 768px;
  text-align: center;

  b {
    color: #F95E21;
  }
`;

export default HowToUse;