import React from 'react';
import classes from './Chat.module.css';

const Chat = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt=""/>
            <p>{props.text}</p>
        </div>
    );
}

export default Chat;