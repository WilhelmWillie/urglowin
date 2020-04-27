import React from 'react';

import { NavBar, MetaTags, LandingHero, LandingHowItWorks, LandingProductRequest, LandingYoureGlowing, Footer } from "../components";
import useUpdateUser from "../hooks/useUpdateUser";
import getUser from "../utils/getUser";

const Profile = ({ user }) => {
  useUpdateUser(user);
  
  return (
    <>
      <MetaTags />
      <NavBar />
      <Footer />
    </>
  )
};

Profile.getInitialProps = async ({req}) => {
  const user = await getUser(req);
  return { user }
}

export default Profile;
