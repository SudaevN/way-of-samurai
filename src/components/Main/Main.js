import React from 'react';
import classes from './Main.module.css';
import Chats from "./Chats/Chats";
import Contacts from "./Contacts/Contacts";
import Profile from "./Profile/Profile";
import Dialog from "./Dialog/Dialog";
import {Route} from "react-router-dom";

const Main = (props) => {

    return (
        <div className={classes.wrapMain}>
            <Route path={'/chats'} render={ () => <Chats messageData={props.state.chatsData}/> } />
            <Route path={'/contacts'} render={ () => <Contacts contactsData={props.state.contactsData}/> } />
            <Route path={'/profile'} render={ () => <Profile postsData={props.state.postsData} /> } />
            <Route path={'/dialog'} render={ () => <Dialog dialogData={props.state.dialogsData.luke} addMessage={props.addMessage}/> } />
        </div>
    );
}

export default Main;