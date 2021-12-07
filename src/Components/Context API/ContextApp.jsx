import React from "react";
import { ThemeContextProvider } from "./Context/ThemeContextProvider";
import ThemedApp from "./Theme Context/ThemedApp";
// import AuthContextApp from "./Auth Context/AuthContextApp";
// import { AuthContextProivder } from "./Context/AuthContextProvider";

const ContextApp = () => {
    return (
        <div>
            {/* <AuthContextProivder >
                <AuthContextApp />
            </AuthContextProivder> */}
            <ThemeContextProvider>
                <ThemedApp />
            </ThemeContextProvider>
        </div>
    )
}

export default ContextApp;