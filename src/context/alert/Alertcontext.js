import { createContext, useReducer } from "react"
import Alertreducer from "./Alertreducer"


const Alertcontext = createContext()
export const Alertprovider = ({children}) => {
    const intialState = null
    

    const [state, dispatch] = useReducer(Alertreducer,intialState)

    //set an Alert

    const setAlert = (msg,type) =>{
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type}
        })

        setTimeout(()=>dispatch({ type: "REMOVE_ALERT"}),3000)
    }

    return <Alertcontext.Provider value={{alert: state , setAlert}}>
         {children}
         </Alertcontext.Provider>   
}

export default Alertcontext

