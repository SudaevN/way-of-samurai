import React from 'react';
import Chats from "./Chats";
import StoreContext from "../../../storeContext";
import Chat from "./Chat/Chat";

const ChatsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let chatsElements = store.getState().chatsData.map( chat => <Chat key={chat.chatId} picUrl={chat.picUrl} text={chat.message}/>);

                    return <Chats chatsElements={chatsElements}/>
                }
            }
        </StoreContext.Consumer>
    )
};

export default ChatsContainer;