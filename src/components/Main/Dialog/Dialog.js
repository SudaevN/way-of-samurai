import React from "react";
import classes from "./Dialog.module.css"
import Message from "./Message/Message";


const Dialog = (props) => {

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    };

    let onChangeMessage = () => {
        let newText = newMessage.current.value;
        props.refreshMessage(newText);
    };

    return (
        <div className={classes.dialogWrap}>
            <div className={classes.dialogWindow}>
                {props.messagesItems}
            </div>
            <div className={classes.chatInputWrap}>
                <textarea ref={newMessage} className={classes.dialogInpt} rows="5" value={props.newMessageText} onChange={onChangeMessage}/>
                <button className={classes.sendBtn} onClick={sendMessage}>send message</button>
            </div>
        </div>
    )
};

export default Dialog;