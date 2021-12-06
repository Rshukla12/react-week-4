import React, { useState } from "react";

const AuthContext = React.createContext("");

const AuthContextProivder = ( { children } ) => {
    const [isAuth, setIsAuth] = useState( false );
    const [isLogin, setIsLogin] = useState( false );

    return (
        <AuthContext.Provider
            value= { { isAuth, setIsAuth, isLogin, setIsLogin } }
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContextProivder,
    AuthContext
};