import { createContext, useReducer } from "react";
import githubreducer from "./Githubreducer";
const Githubcontext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider = ({children}) => {
 const intialstate = {
    users: [],
    loading: false
 }

 const [state, dispatch] = useReducer(githubreducer, intialstate)

//get intial users(testing purpose )
    const fetchusers = async () =>{
        setloading()
        const response = await fetch(`${GITHUB_URL}/users`,{
    
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        }
        
      
        
        
        
        )
        const data = await response.json()
    dispatch({
        type: 'GET_USERS',
        payload: data
    })
 
    }
//set loading
const setloading = () => {
    dispatch({type: 'SET_LOADING'})
}

return <Githubcontext.Provider value={{
    users : state.users,
    loading: state.loading ,
    fetchusers
}}>
    {children}
</Githubcontext.Provider>


}


export default Githubcontext