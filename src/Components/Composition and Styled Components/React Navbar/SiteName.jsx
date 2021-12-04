import React from "react";
import style from "./Navbar.module.css";

const SiteName = ( { children } ) => {
    return (
        <div className={style.siteName}>  
            {children}
        </div>
    )
}

export default SiteName;