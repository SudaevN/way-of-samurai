import React from "react";
import {refreshActionCreator, sendActionCreator} from "../../../redux/dialog-reducer";
import Message from "./Message/Message";
import Dialog from "./Dialog";


const DialogContainer = (props) => {

    let refreshMessage = (newText) => {
        let action = refreshActionCreator(newText)
        props.store.dispatch(action);
    };

    let sendMessage = () => {
        props.store.dispatch(sendActionCreator())
    };

    let state = props.store.getState();
    let messagesItems = state.dialogsData.luke.map(message => <Message key={message.id} right={message.right} authorAva={message.authorAva} message={message.message}/>);
    return (
        <Dialog sendMessage={sendMessage} refreshMessage={refreshMessage} messagesItems={messagesItems} />
    )

};

export default DialogContainer;