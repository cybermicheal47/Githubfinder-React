import React, { createContext, useReducer } from "react";
import githubreducer from "./Githubreducer";

// Create a context for the Github data
const Githubcontext = createContext();



// Define the GithubProvider component
export const GithubProvider = ({ children }) => {
  // Initial state for the Github context
  const initialState = {
    users: [],
    loading: false,
    userprofile: [],
    repos: []
  };

  // Define the reducer and its initial state
  const [state, dispatch] = useReducer(githubreducer, initialState);








 












  // Provide the context value to the children
  return (
    <Githubcontext.Provider
      value={{
     ...state,
     dispatch,
      
      
        
      
      }}
    >
      {children}
    </Githubcontext.Provider>
  );
};

export default Githubcontext;
