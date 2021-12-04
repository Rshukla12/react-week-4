import React from "react";
import Drawer from "./Drawer";
import DrawerItem from "./DrawerItem";

const ReactSidebar = () => {
    return (
        <Drawer>
            <DrawerItem label={"Inbox"} icon={"https://cdn.icon-icons.com/icons2/1369/PNG/512/-move-to-inbox_90739.png"} />
            <DrawerItem label={"Starred"} icon={"https://cdn.icon-icons.com/icons2/1369/PNG/512/-move-to-inbox_90739.png"} />
            <DrawerItem label={"Send Email"} icon={"https://cdn.icon-icons.com/icons2/1369/PNG/512/-move-to-inbox_90739.png"} />
            <DrawerItem label={"Drafts"} icon={"https://cdn.icon-icons.com/icons2/1369/PNG/512/-move-to-inbox_90739.png"} />
        </Drawer>

    )
}

export default ReactSidebar;