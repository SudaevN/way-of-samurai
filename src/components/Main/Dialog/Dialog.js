import React from "react";
import classes from "./Dialog.module.css"
import Message from "./Message/Message";

const Dialog = (props) => {

    let newMessage = React.createRef();

    let sendMessage = () => {
        if (props.newMessageText != '') {
            props.addMessage();
        }
    };

    let onChangeMessage = () => {
        let newText = newMessage.current.value;
        props.refreshMessageText(newText);
    };

    let messagesItem = props.dialogData.map( message => <Message key={message.id} right={message.right} authorAva={message.authorAva} message={message.message} /> )
    return (
        <div className={classes.dialogWrap}>
            <div className={classes.dialogWindow}>
                {messagesItem}
            </div>
            <div className={classes.chatInputWrap}>
                <textarea ref={newMessage} className={classes.dialogInpt} rows="5" value={props.newMessageText} onChange={onChangeMessage} />
                <button className={classes.sendBtn} onClick={ sendMessage }>send message</button>
            </div>
        </div>
    )
};

export default Dialog;