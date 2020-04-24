import React from "react";
import classes from "./Dialog.module.css";
import MessageTextarea from "./MessageTextarea/MessageTextarea";


const Dialog = (props) => {

    return (
        <div className={classes.dialogWrap}>
            <div className={classes.dialogWindow}>
                {props.messagesItems}
            </div>
            <MessageTextarea refreshMessage={props.refreshMessage} sendMessage={props.sendMessage} newMessageText={props.newMessageText} />
        </div>
    )
};

export default Dialog;