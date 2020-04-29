import React from "react";
import {refreshActionCreator, sendActionCreator} from "../../../redux/dialog-reducer";
import Message from "./Message/Message";
import Dialog from "./Dialog";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagesItems: state.dialogsData.luke.map(message => <Message key={message.id} right={message.right} authorAva={message.authorAva} message={message.message}/>),
        newMessageText: state.dialogsData.newMessageText
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        refreshMessage: (newText) => {
            dispatch(refreshActionCreator(newText));
        },
        sendMessage: () => {
            dispatch(sendActionCreator());
        }
    }

};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;