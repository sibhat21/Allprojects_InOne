import React,{ createContext, useContext, useReducer } from "react";
//Prepares the dataLayer

export const StateContext = createContext();
//wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
//pull and push  information from the data layer
export  const useStatevalue = () => useContext(StateContext);
