import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(localStorage.getItem('token'))
    const storeTokenInLocalStorage = (serverToken)=>{
        setToken(serverToken)
        return localStorage.setItem('token', serverToken)

    }
    // set loggedin
    let isLoggedIn = !!token;

    // Logout functionality
    const LogoutUser = () =>{
        setToken("")
        return localStorage.removeItem('token');

    }
    console.log("Login token from isloggedin", isLoggedIn)
    return <AuthContext.Provider value={{isLoggedIn,storeTokenInLocalStorage, LogoutUser}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () =>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth use outside of the Provider")
    }
    return authContextValue
}