import React from "react";
import { useState } from "react/cjs/react.development";

const AuthContext = React.createContext("");

const AuthContextProvider = ( { children } ) => {
    const [auth, setAuth] = useState(false);
    const toggleAuth = () => {
        setAuth(!auth);
    }

    return (
        <AuthContext.Provider value={[auth, toggleAuth]}>
            { children }
        </AuthContext.Provider>
    );
}

export {
    AuthContext,
    AuthContextProvider
}