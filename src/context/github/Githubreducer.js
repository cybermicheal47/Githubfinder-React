const githubreducer = (state, action) =>{
switch (action.type) {
  case 'GET_USERS':
return{
    ...state,
   users : action.payload,
    loading : false
} 

case "SET_LOADING" :
        return {
            ...state,
            loading:true,
        }
case "GET_USERPROFILE_AND_REPOS" :
    return {
        ...state,
        userprofile: action.payload.user,
        repos : action.payload.repos,
        loading: false
    }





case 'CLEAR_USERS':
    return {
        ...state,
        users:[]
    }

    default:
        return state
}
}

export default githubreducer