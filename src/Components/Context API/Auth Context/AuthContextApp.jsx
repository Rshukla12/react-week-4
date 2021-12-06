import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";


const AuthContextApp = () => {
    const { isAuth, isLogin } = useContext( AuthContext );
    
    return ( 
        <div>
            <Navbar />
            { 
                !isAuth && isLogin && <LoginForm />
            }
        </div>
    )
}

export default AuthContextApp;