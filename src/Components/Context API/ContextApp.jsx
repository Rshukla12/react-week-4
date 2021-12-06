import React from "react";
import AuthContextApp from "./Auth Context/AuthContextApp";
import { AuthContextProivder } from "./Context/AuthContextProvider";

const ContextApp = () => {
    return (
        <div>
            <AuthContextProivder >
                <AuthContextApp />
            </AuthContextProivder>
        </div>
    )
}

export default ContextApp;