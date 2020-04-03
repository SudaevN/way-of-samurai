import React from 'react';
import classes from './Chats.module.css';
import Chat from "./Chat/Chat";

const Chats = () => {
    return (
        <div className={classes.chatsWrap}>
            <Chat text={'message from Nikita'}/>
            <Chat text={'GO CS!'}/>
            <Chat text={'text3'}/>
            <Chat text={'I like you!'}/>
            <Chat text={'text5'}/>
        </div>
    );
}

export default Chats;