import React, { createContext, useReducer } from "react";
import githubreducer from "./Githubreducer";

// Create a context for the Github data
const Githubcontext = createContext();

// Read environment variables
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

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

  // Search users function
  const searchusers = async (text) => {
    setLoading(); // Call the setLoading function
    const params = new URLSearchParams({
      q: text,
    });

    try {
      // Fetch the users based on the search text
      const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });

      if (response.status === 404) {
        // Redirect to notfound page if user not found
        window.location = '/notfound';
      } else {
        const { items } = await response.json();
        dispatch({
          type: 'GET_USERS',
          payload: items,
        });
      }
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };








  // Get single user profile function
  const getUserProfile = async (login) => {
    setLoading(); // Call the setLoading function

    try {
      // Fetch the user profile based on the login
      const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });

      if (response.status === 404) {
        // Redirect to notfound page if user not found
        window.location = '/notfound';
      } else {
        const data = await response.json();
        dispatch({
          type: 'GET_USERPROFILE',
          payload: data,
        });
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };






// Get User Repios
  const getUserrepos = async (login) => {
    setLoading(); // Call the setLoading function
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    });


    try {
      // Fetch the user Repo
      const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });

      if (response.status === 404) {
        // Redirect to notfound page if user not found
        window.location = '/notfound';
      } else {
        const data = await response.json();
        dispatch({
          type: 'GET_REPOS',
          payload: data,
        });
      }
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };












  // Set loading state
  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  // Clear users from the state
  const clearusers = () => {
    dispatch({ type: 'CLEAR_USERS' });
  };

  // Provide the context value to the children
  return (
    <Githubcontext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        userprofile: state.userprofile,
        repos : state.repos,
        searchusers,
        getUserProfile,
        clearusers,
        getUserrepos
      }}
    >
      {children}
    </Githubcontext.Provider>
  );
};

export default Githubcontext;
