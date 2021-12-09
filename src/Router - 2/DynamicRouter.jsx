import React from "react";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

const DynamicRouter = () => {
    return (
        <div>
            <Navbar />
            <AllRoutes/>
        </div>
    )
}

export default DynamicRouter;