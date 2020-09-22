import React from 'react';
import "./Chat.css"
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';


function Chat() {

   


    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at..</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton >
                        <MoreVert />
                    </IconButton>
                </div>

            </div>
            <div className="chat__body">
               
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value = "" 
                    placeholder="Type a message"   type="text"/>
                        
                      
                    
                    <button  onClick="" 
                        type="submit">
                        send a message
                        </button>

                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat;