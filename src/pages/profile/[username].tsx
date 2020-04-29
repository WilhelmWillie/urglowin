import React from 'react';
import Router from 'next/router';
import fetch from "isomorphic-unfetch";

import { NavBar, MetaTags, Footer, ProfileColumns, LoginModal } from "../../components";

const Profile = ({ user }) => {
  return (
    <>
      <MetaTags 
        title={user && `URGLOWIN - ${user.firstName} ${user.lastName}'s URGLOWIN Profile`}
        description={user && `Check out ${user.firstName} ${user.lastName}'s URGLOWIN profile. Learn about their skin type, preferences, and favorite products!`}
      />
      <NavBar />
      {user && <ProfileColumns user={user} isPublicView={true} />}
      <Footer />
      <LoginModal />
    </>
  )
};

Profile.getInitialProps = async ({req, query}) => {
  const host = process.env.URL || 'http://localhost:3000';
  const route = `user/${query.username}`;
  const url = req ? `${host}/api/${route}` : `/api/${route}`;
  const res = await fetch(url);
  const { user } = await res.json();

  if (!user) {
    if (req) {
      // Server side 302
      req.res.writeHead(302, {
        Location: '/'
      });
      req.res.end();
    } else {
      Router.push('/')
    }
  }

  return { user }
}

export default Profile;
