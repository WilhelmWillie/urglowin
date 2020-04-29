import React, { useEffect, useContext } from 'react';

import { NavBar, MetaTags, Footer, ProfileColumns, EditProfileModal } from "../../components";
import useUpdateUser from "../../hooks/useUpdateUser";
import useUser from "../../hooks/useUser";
import getUser from "../../utils/getUser";
import redirectIfNoAuth from "../../utils/redirectIfNoAuth";
import { AppStore } from "../../stores";

const Profile = ({ initUser }) => {
  const appState = useContext(AppStore);
  const { dispatch } = appState;

  useUpdateUser(initUser);

  const user = useUser();
  
  useEffect(() => {
    if (user && !user.hasSetupProfile) {
      dispatch({ type: 'TOGGLE_EDIT_PROFILE_MODAL' });
    }
  }, [user]);
  
  return (
    <>
      <MetaTags />
      <NavBar />
      {user && <ProfileColumns user={user} />}
      <Footer />
      <EditProfileModal />
    </>
  )
};

Profile.getInitialProps = async ({req}) => {
  const user = await getUser(req);
  redirectIfNoAuth(user, req);

  return { initUser: user }
}

export default Profile;
