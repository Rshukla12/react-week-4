import React from "react";
import Navbar from "./Components/Navbar";
import { AuthContextProvider } from "./Context/AuthContextProvider";
import AllRoutes from "./Pages/Routes";

const PrivateRoutesApp = () => {
    return (
        <AuthContextProvider>
            <Navbar />
            <AllRoutes />
        </AuthContextProvider>
    )
} 

export default PrivateRoutesApp;