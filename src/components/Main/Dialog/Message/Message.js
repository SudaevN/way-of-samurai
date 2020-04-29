import React from "react";
import classes from "./Message.module.css";
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <div className={classes.messageWrap + '' + (props.right ? ' ' + classes.right : '')}>
            <div className={classes.message}>
                <NavLink to="/profile" ><img className={classes.authoreAva} src={props.authorAva} alt=""/></NavLink>
                <span className={classes.messageText}>{props.message}</span>
            </div>
        </div>
    )
};

export default Message;