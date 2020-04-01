import styled from "styled-components";

import { Container, Row, Column } from "./style";

const HeaderSection = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Column width={"49%"}>
            <h1>Explore</h1>
          </Column>

          <Column width={"49%"}>
            <p>Look good &amp; feel good – care for your skin and satisfy your curiosity by looking for products and ingredients that work for you. Learn about 100+ products.</p>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 64px 0;
`;

export default HeaderSection;