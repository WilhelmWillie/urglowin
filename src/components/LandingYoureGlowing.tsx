import styled from "styled-components";

import { Container, Row, Column } from "./style";

const LandingYoureGlowing = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Column>
            <p>There’s too many products out there to try them all. Tell us about your skin and we’ll tell you what’s for your skin. &amp; remember, you’re glowin’.</p>
          
            <YoureGlowin src="/youre_glowing.png" alt="Man in a yellow hoodie with text that says 'You're Glowin' above him"/>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 64px 0 0;

  p {
    font-family: GintoNord;
    font-size: 18px;
    color: #000000;
    margin-bottom: 32px;
    width: 65%;
    margin: 0 auto;
    text-align: center;
    line-height: 28px;
  }
`;

const YoureGlowin = styled.img`
  width: 40%;
  max-width: 420px;
  margin: 48px auto 0;
`;

export default LandingYoureGlowing;