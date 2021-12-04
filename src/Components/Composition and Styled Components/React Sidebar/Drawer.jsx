import React from "react";
import style from "./Drawer.module.css";

const Drawer = ({children}) => {
    return (
        <div className={style.drawer}>
            <hr />
            <div className={style.drawerChild} >
                {children}
            </div>
            <hr />
        </div>
    )
}

export default Drawer;