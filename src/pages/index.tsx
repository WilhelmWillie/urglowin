import React from 'react';

import { NavBar, MetaTags, LandingHero, LandingHowItWorks, LandingProductRequest, LandingYoureGlowing, Footer, LoginModal } from "../components";
import useUpdateUser from "../hooks/useUpdateUser";
import getUser from "../utils/getUser";

const Home = ({ user }) => {
  useUpdateUser(user);
  
  return (
    <>
      <MetaTags />
      <NavBar />
      <LandingHero />
      <LandingHowItWorks />
      <LandingYoureGlowing />
      <LandingProductRequest />
      <Footer />
      <LoginModal />
    </>
  )
};

Home.getInitialProps = async ({req}) => {
  const user = await getUser(req);
  return { user }
}

export default Home;
