import React from 'react';
import classes from './Chats.module.css';

const Chats = (props) => {

    return (
        <div className={classes.chatsWrap}>
            {props.chatsElements}
        </div>
    );
}

export default Chats;