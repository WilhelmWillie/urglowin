// App wide store -- useful for authentication purposes and what-not
import React, { createContext, useReducer } from 'react';

const initialState : any = {
  category: null
};

const SearchStore = createContext(initialState);
const { Provider } = SearchStore;

const SearchProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'UPDATE_CATEGORY':
        const newState = {
          ...state,
          category: action.category
        }
        
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return (<Provider value={{ state, dispatch }}>{children}</Provider>);
};

export { SearchStore, SearchProvider }