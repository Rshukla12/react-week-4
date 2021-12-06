import React, { useContext } from "react"
import { AuthContext } from "../Context/AuthContextProvider"

const Navbar = ( ) => {
    const { isAuth, setIsAuth, setIsLogin } = useContext(AuthContext);

    return (
        <div>
            Navbar
            <div>
                {
                    isAuth ? (
                        <button onClick={() => setIsAuth(false)}>Sign Out</button>
                    ) : (
                        <button onClick={() => setIsLogin(true)}>Sign in</button>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;