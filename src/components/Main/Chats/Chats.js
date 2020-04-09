import React from 'react';
import classes from './Chats.module.css';
import Chat from "./Chat/Chat";

const Chats = (props) => {

    let chatsElements = props.messageData.map( chat => <Chat key={chat.chatId} picUrl={chat.picUrl} text={chat.message}/>)

    return (
        <div className={classes.chatsWrap}>
            {chatsElements}
        </div>
    );
}

export default Chats;