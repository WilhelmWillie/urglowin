import { useContext, useEffect, useCallback } from 'react';

import { AppStore } from "../stores";
import getUser from "../utils/getUser";

function useUser(user?) {
  const useUserAsync = async () => {
    let loggedInUser;
    
    const appState = useContext(AppStore);
    const { dispatch } = appState;
    useEffect(() => {
      dispatch({ type: 'UPDATE_USER', user: loggedInUser });
    }, [loggedInUser]);

    if (!user) {
      loggedInUser = await getUser()
    } else {
      loggedInUser = user;
    }
  }

  useUserAsync();
}

export default useUser;

function useUpdateUserCB() {
  const appState = useContext(AppStore);

  return useCallback(async () => {
    const { dispatch } = appState;

    const user = await getUser();
    dispatch({ type: 'UPDATE_USER', user });
  }, [])
}

export { useUpdateUserCB };