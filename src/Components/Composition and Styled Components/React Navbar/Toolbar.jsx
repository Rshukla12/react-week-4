import React from "react";
import style from "./Navbar.module.css";

const Toolbar = ( { children } ) => {
    return (
        <div className={style.toolbar}>
            { children }
        </div>
    )
} 

export default Toolbar;