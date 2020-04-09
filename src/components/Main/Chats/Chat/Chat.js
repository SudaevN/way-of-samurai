import React from 'react';
import classes from './Chat.module.css';
import {NavLink} from "react-router-dom";

const Chat = (props) => {
    return (
        <NavLink to="/dialog" className={classes.item}>
            <img src={props.picUrl} alt=""/>
            <p>{props.text}</p>
        </NavLink>
    );
}

export default Chat;