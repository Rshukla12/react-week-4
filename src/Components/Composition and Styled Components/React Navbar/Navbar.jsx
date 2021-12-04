import React from "react";
import DrawerItem from "./DrawerItem";
import SiteName from "./SiteName";
import Toolbar from "./Toolbar";

const Navbar = () => {
    return (
        <Toolbar>
            <SiteName>
                <DrawerItem label="SITENAME"/>
            </SiteName>
            <DrawerItem label="About us"/>
            <DrawerItem label="Prices"/>
            <DrawerItem label="Start page"/>
            <DrawerItem label="Offer"/>
            <DrawerItem label="Contact"/>
        </Toolbar>
    );
}

export default Navbar;