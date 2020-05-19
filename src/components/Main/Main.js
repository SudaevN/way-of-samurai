import React from 'react';
import classes from './Main.module.css';
import {Route} from "react-router-dom";
import DialogContainer from "./Dialog/DialogContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import ContactsContainer from "./Contacts/ContactsContainer";
import ChatsContainer from "./Chats/ChatsContainer";
import UsersContainer from "./Users/UsersContainer";


const Main = () => {

    return (
        <div className={classes.wrapMain}>
            <Route path={'/users'} render={ () => <UsersContainer/> } />
            <Route path={'/chats'} render={ () => <ChatsContainer /> } />
            <Route path={'/contacts'} render={ () => <ContactsContainer /> } />
            <Route path={'/profile/:userId?'} render={ () => <ProfileContainer /> } />
            <Route path={'/dialog'} render={ () => <DialogContainer /> } />
        </div>
    );
};

export default Main;