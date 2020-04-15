import React from "react";
import classes from "./Dialog.module.css"
import Message from "./Message/Message";
import {refreshActionCreator, sendActionCreator} from "../../../redux/state";


const Dialog = (props) => {

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendActionCreator())
    };

    let onChangeMessage = () => {
        let newText = newMessage.current.value;
        props.dispatch(refreshActionCreator(newText));
    };

    let messagesItem = props.dialogData.map(message =>
        <Message key={message.id} right={message.right} authorAva={message.authorAva} message={message.message}/>)

    return (
        <div className={classes.dialogWrap}>
            <div className={classes.dialogWindow}>
                {messagesItem}
            </div>
            <div className={classes.chatInputWrap}>
                <textarea ref={newMessage} className={classes.dialogInpt} rows="5" value={props.newMessageText} onChange={onChangeMessage}/>
                <button className={classes.sendBtn} onClick={sendMessage}>send message</button>
            </div>
        </div>
    )
};

export default Dialog;