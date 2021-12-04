import React from "react";
import style from "./Navbar.module.css";

const DrawerItem = ( { label } ) => {
    return(
        <div className={style.drawerItem}>
            <div className={style.label}>
                {label}
            </div>
        </div>
    )
};

export default DrawerItem;