import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const Login = () => {
    const [ auth, toggleAuth] = useContext(AuthContext);

    return (
        <div>
            <button onClick={toggleAuth}>{auth ? "Sign Out" : "Sign In"}</button>
        </div>
    )
}

export default Login;