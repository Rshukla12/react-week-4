import React from "react";
import style from "./Drawer.module.css";

const DrawerItem = ({label, icon}) => {
    return(
        <div className={style.drawerItem}>
            <div className={style.iconCont} >
                <img className={style.icon} src={icon} alt={label} />
            </div>
            <div className={style.label}>
                {label}
            </div>
        </div>
    )
};

export default DrawerItem;