import styled from "styled-components";

import { Container, Row, Column } from "./style";
import Button from "./Button";

import HeroBG from "../assets/hero_bg.svg";

const LandingHero = () => {
  return (
    <Wrapper>
      <Container>
        <Row justify="space-between">
          <TextColumn width={"38%"}>
            <h1>Hey, you're glowing! ✨</h1>

            <p>Curated skincare product recommendations for your skin</p>

            <Button>Take the Quiz</Button>
          </TextColumn>

          <Column width={"25%"}>
            <Girl src="/gorl.jpg" />
          </Column>
        </Row>
      </Container>

      <Background src={HeroBG} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 64px 0;
  position: relative;
`;

const TextColumn = styled(Column)`
  p {
    margin: 32px 0;
  }
`;

const Background = styled.img`
  position: absolute;
  top: -30%;
  right: 0;
  height: 200%;
  z-index: -1;
`;

const Girl = styled.img`
  max-width: 100%
`;

export default LandingHero;