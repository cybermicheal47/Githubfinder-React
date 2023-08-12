import {useContext} from "react"
import Spinner  from "../layout/Spinner"
import Useritem from "./Useritem"
import Githubcontext from "../../context/github/Githubcontext"
function Userresult() {
  const {users,loading} =   useContext(Githubcontext)






if (!loading){
    return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"    >
      
    {users.map((user)=>(
      <Useritem key={user.id} user={user} />
    ))}
    
        </div >
      )
    }
    else {
        return <>
        <Spinner />
        </>
    }

}




 

export default Userresult
