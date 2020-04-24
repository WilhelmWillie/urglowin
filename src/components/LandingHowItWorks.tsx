import styled from "styled-components";

import { Container, Row, Column } from "./style";
import Button from "./Button";

import HowItWorks from "../assets/how_it_works.svg";

const LandingHowItWorks = () => {
  return (
    <Wrapper>
      <Container>
        <Row justify="space-between">
          <TextColumn width={"30%"}>
            <h2>How it works</h2>

            <p><Step>00</Step> Take the In-Depth Quiz so we can understand your skin.</p>

            <p><Step>01</Step> Receive curated product information matched to your concerns.</p>

            <p><Step>02</Step> Learn more about your products &amp; get glowin!</p>
          </TextColumn>

          <Column width={"70%"}>
            <InfoImg src={HowItWorks} />
          </Column>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 64px 0;
  position: relative;
  background: #F6F6F6;

  h2 {
    font-size: 24px;
    font-family: GintoNord;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
`;

const TextColumn = styled(Column)`
  p {
    margin: 8px 0;
  }
`;

const InfoImg = styled.img`
  max-width: 100%
`;

const Step = styled.span`
  color: #3298F9;
  padding-right: 12px;
`;

export default LandingHowItWorks;