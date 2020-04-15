import styled from "styled-components";

import { Container, Row, Column } from "./style";

import ProductDetailSectionHeader from "./ProductDetailSectionHeader";

import OrderSVG from "../assets/order.svg";

const Order = ({ product }) => {
  const step = (
    product.category === 'Cleanser' ? 1 :
    product.category === 'Toner' ? 2 :
    product.category === 'Serum' ? 3 :
    product.category === 'Eye Cream' || product.category === 'Moisturizer' ? 4 :
    product.category === 'Oil' ? 5 : 
    -1
  );

  return (
    <Wrapper>
      <Container>
        <ProductDetailSectionHeader>The Order</ProductDetailSectionHeader>

        <StepsRow justify="space-between">
          <StepsColumn width="19%" here={step === 1}>
            <span>⦿ Here</span>
            <h3>(1) Cleanse.</h3>

            <p>Use oil based cleansers first, and then liquid cleansers. You can also use a physical exfoliator after cleansing.</p>
          </StepsColumn>

          <StepsColumn width="19%" here={step === 2}>
            <span>⦿ Here</span>
            <h3>(2) Toner/Exfoliants.</h3>

            <p>Take off the last traces of dirt and then you can use chemical exfoliants (like AHAs or BHAs).</p>
          </StepsColumn>

          <StepsColumn width="19%" here={step === 3}>
            <span>⦿ Here</span>
            <h3>(3) Serums/Retinoid.</h3>

            <p>Serums have a higher concentration of active ingredients, like vitamin C. Vitamin A (like retinoid) comes next.</p>
          </StepsColumn>

          <StepsColumn width="19%" here={step === 4}>
            <span>⦿ Here</span>
            <h3>(4) Creams.</h3>

            <p>Eye cream, spot treatments, and moisturizers come next.</p>
          </StepsColumn>

          <StepsColumn width="19%" here={step === 5}>
            <span>⦿ Here</span>
            <h3>(5) Oils.</h3>

            <p>Other products can’t penetrate oil, so use this last to lock everything in.</p>
          </StepsColumn>
        </StepsRow>

        <OrderGraphic src={OrderSVG} />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 64px 0;
`;

const StepsRow = styled(Row)`
  padding: 64px 0;
`;

const StepsColumn = styled(Column)`
  text-align: center;

  h3 {
    font-family: GintoNord;
    color: #FFFFFF;
    background-color: #1E1E1E;
    font-size: 14px;
    flex-shrink: 0;
    padding: 6px;
    border-radius: 6px;
    align-self: flex-start;
    margin: 0 auto 16px;

    ${({here}) => here && 'background-color: #3298F9;'}
  }

  span {
    font-family: GintoNord;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 8px;
    color: #3298F9;
    opacity: 0;

    ${({here}) => here && 'opacity: 1'}
  }

  p {
    font-size: 14px;
  }
`;

const OrderGraphic = styled.img`
  display: block;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
`;

export default Order;