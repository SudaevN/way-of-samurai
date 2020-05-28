import React from "react";
import classes from "./Dialog.module.css";
import MessageTextarea from "./MessageTextarea/MessageTextarea";
import {Redirect} from "react-router-dom";


const Dialog = (props) => {

    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }
    return (
        <div className={classes.dialogWrap}>
            <div className={classes.dialogWindow}>
                {props.messagesItems}
            </div>
            <MessageTextarea refreshMessage={props.refreshMessage} sendMessage={props.sendMessage} newMessageText={props.newMessageText}/>
        </div>
    )
};

export default Dialog;