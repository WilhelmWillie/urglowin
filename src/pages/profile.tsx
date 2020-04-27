import React from 'react';

import { NavBar, MetaTags, Footer, ProfileColumns } from "../components";
import useUpdateUser from "../hooks/useUpdateUser";
import getUser from "../utils/getUser";

const Profile = ({ user }) => {
  useUpdateUser(user);
  
  return (
    <>
      <MetaTags />
      <NavBar />
      <ProfileColumns user={user} />
      <Footer />
    </>
  )
};

Profile.getInitialProps = async ({req}) => {
  const user = await getUser(req);
  return { user }
}

export default Profile;
