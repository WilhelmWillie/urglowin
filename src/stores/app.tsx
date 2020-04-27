// App wide store -- useful for authentication purposes and what-not
import React, { createContext, useReducer } from 'react';

const initialState : any = {
  user: null
};

const AppStore = createContext(initialState);
const { Provider } = AppStore;

const AppProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'UPDATE_USER':
        const newState = {
          ...state,
          user: action.user
        }
        
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return (<Provider value={{ state, dispatch }}>{children}</Provider>);
};

export { AppStore, AppProvider }