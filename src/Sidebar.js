import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/p720x720/68706794_1301702716657160_995134065533255680_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=oGgPqY_ce70AX-dLnZ2&_nc_ht=scontent-mxp1-1.xx&tp=6&oh=8e00155963f2c201a27895021bc68594&oe=5F8E2E24" />

                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

<div className="sidebar__Chats">
    <SidebarChat />
   
</div>

        </div>
    )
}

export default Sidebar;