import React, { useEffect, useContext  } from 'react';

import { NavBar, MetaTags, HeaderSection, ProductSection, SearchFilter, SearchBox, LandingHero, LandingHowItWorks, LandingProductRequest, LandingYoureGlowing, Footer } from "../components";

const Home = () => {
  return (
    <>
      <MetaTags />
      <NavBar />
      <LandingHero />
      <LandingHowItWorks />
      <LandingYoureGlowing />
      <LandingProductRequest />
      <Footer />
    </>
  )
};

export default Home;
