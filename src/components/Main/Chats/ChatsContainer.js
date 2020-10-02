import React from 'react';
import Chats from "./Chats";
import Chat from "./Chat/Chat";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    chatsElements: state.chatsData.map(chat => <Chat key={chat.chatId} picUrl={chat.picUrl} text={chat.message}/>)
  }
};

const ChatsContainer = connect(mapStateToProps)(Chats);

export default compose(
  connect(mapStateToProps),
    withRouter,
    withAuthRedirect
  )(ChatsContainer);