import React from "react";
import {sendActionCreator} from "../../../redux/dialog-reducer";
import Message from "./Message/Message";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messagesItems: state.dialogsData.luke.map(message =>
            <Message key={message.id} right={message.right} authorAva={message.authorAva} message={message.message}/>),
        newMessageText: state.dialogsData.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendActionCreator(newMessage));
        }
    }
};

let AuthRedirectComponent = withAuthRedirect(Dialog);

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogContainer);