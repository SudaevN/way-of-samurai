import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={classes.messageWrap + '' + (props.right ? ' ' + classes.right : '')}>
            <div className={classes.message}>
                <img className={classes.authoreAva} src={props.authorAva} alt=""/>
                <span className={classes.messageText}>{props.message}</span>
            </div>
        </div>
    )
};

export default Message;