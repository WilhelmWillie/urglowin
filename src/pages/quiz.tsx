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
        <div 
          className="typeform-widget" 
          data-url="https://jennychung1.typeform.com/to/J0Jpye" 
          data-transparency="100" 
          style={{
            width: '100%',
            height: '500px'
          }}
        ></div> 
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() 
            `
          }}
        />
        
        <div
          style={{
            fontFamily: 'Sans-Serif',
            fontSize: '12px',
            color: '#999',
            opacity: 0.5,
            paddingTop: '5px'
          }}
        > 
          powered by 
          <a href="https://admin.typeform.com/signup?utm_campaign=J0Jpye&utm_source=typeform.com-01D8JX1SPA168JZ2RM2HRJKCB5-professional&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style={{color: '#999'}} target="_blank">Typeform</a>
        </div>
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
`;

export default Quiz;
