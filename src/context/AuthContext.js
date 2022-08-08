import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"
const INITIAL_STATE = {
    user:     {
        _id: "62eee44f54630b77831e89b5",
        username: "gabriel",
        email: "gabriel@gmail.com",
        password: "$2b$10$GO5b5ZrgUHevEVtu/Vgq0ePsPBFSyFKyC2UoaMq6/hNo32kgm5oay",
        profilePicture: "person/person7.jpg",
        coverPicture: "post/post5.jpg",
        followers: [],
        followings: [
            "62eee42254630b77831e89af"
        ],
    },
    isFetching: false,
    error: false
    
}
export const AuthContext = createContext(INITIAL_STATE)
export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return (
        <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error: state.error, dispatch}}>{children}</AuthContext.Provider> 
    )
}