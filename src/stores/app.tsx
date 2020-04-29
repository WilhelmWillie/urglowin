// App wide store -- useful for authentication purposes and what-not
import React, { createContext, useReducer } from 'react';

const initialState : any = {
  user: null,
  showLoginModal: false,
  showEditProfileModal: false,
};

const AppStore = createContext(initialState);
const { Provider } = AppStore;

const AppProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'UPDATE_USER':
        const stateWithUser = {
          ...state,
          user: action.user
        }
        
        return stateWithUser;
      case 'TOGGLE_LOGIN_MODAL':
        const toggledModalState = {
          ...state,
          showLoginModal: !state.showLoginModal
        }

        return toggledModalState;
      case 'TOGGLE_EDIT_PROFILE_MODAL':
        const editModalState = {
          ...state,
          showEditProfileModal: !state.showEditProfileModal
        }

        return editModalState;
      default:
        throw new Error();
    };
  }, initialState);

  return (<Provider value={{ state, dispatch }}>{children}</Provider>);
};

export { AppStore, AppProvider }