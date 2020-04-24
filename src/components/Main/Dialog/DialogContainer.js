import React from "react";
import {refreshActionCreator, sendActionCreator} from "../../../redux/dialog-reducer";
import Message from "./Message/Message";
import Dialog from "./Dialog";
import StoreContext from "../../../storeContext";


const DialogContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let messagesItems = state.dialogsData.luke.map(message => <Message key={message.id} right={message.right} authorAva={message.authorAva} message={message.message}/>);

                    let newMessageText = state.dialogsData.newMessageText;

                    let refreshMessage = (newText) => {
                        let action = refreshActionCreator(newText)
                        store.dispatch(action);

                    };
                    let sendMessage = () => {
                        store.dispatch(sendActionCreator())

                    };

                    return <Dialog sendMessage={sendMessage} refreshMessage={refreshMessage} messagesItems={messagesItems} newMessageText={newMessageText}/>
                }
            }
        </StoreContext.Consumer>
    )
};

export default DialogContainer;