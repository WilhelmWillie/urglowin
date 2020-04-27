import { useContext } from 'react';

import { AppStore } from "../stores";

function useUser() {
  const appState = useContext(AppStore);
  const { state: { user } } = appState;

  return user;
}

export default useUser;