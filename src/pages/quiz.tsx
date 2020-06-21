import React from 'react';
import styled from "styled-components";

import { NavBar, MetaTags, LandingHero, LandingHowItWorks, LandingProductRequest, LandingYoureGlowing, Footer, LoginModal } from "../components";
import { Container } from "../components/style";
import useUpdateUser from "../hooks/useUpdateUser";
import getUser from "../utils/getUser";

const Quiz = ({ user }) => {
  useUpdateUser(user);
  
  return (
    <>
      <MetaTags />
      <NavBar />
      <QuizContainer>
        <h1>URGLOWIN Quiz ✨</h1>

        <p>Welcome to URGLOWIN! To get started, take this in-depth quiz so we can understand your skin. Once we've analyzed your input, you'll received curated product information matched to your concerns!</p>
        
        <h3 style={{marginTop: 20}}>Quiz under construction, check back later.</h3>
        {/* <iframe id="my_typeform" src="https://jennychung1.typeform.com/to/J0Jpye"></iframe> */}
      </QuizContainer>
      <Footer />
      <LoginModal />
    </>
  )
};

Quiz.getInitialProps = async ({req}) => {
  const user = await getUser(req);
  return { user }
}

const QuizContainer = styled(Container)`
  margin: 32px auto 64px;
  padding: 32px;
  border-radius: 10px;
  overflow: hidden;
  
  iframe {
    width: 100%;
    min-height: 70vh;
  }

  h1, p {
    width: 70%;
    margin: 0 auto 24px;
  }

  @media screen and (max-width: 768px) {
    iframe {
      max-height: 80vh;
    }

    h1, p {
      width: 90%;
    }
  }
`;

export default Quiz;
