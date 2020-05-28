import React from 'react';
import classes from './Main.module.css';
import {Route} from "react-router-dom";
import DialogContainer from "./Dialog/DialogContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import ContactsContainer from "./Contacts/ContactsContainer";
import ChatsContainer from "./Chats/ChatsContainer";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/login";


const Main = (props) => {

    return (
        <div className={classes.wrapMain}>
            <Route path={'/users'} render={ () => <UsersContainer/> } />
            <Route path={'/chats'} render={ () => <ChatsContainer /> } />
            <Route path={'/contacts'} render={ () => <ContactsContainer /> } />
            <Route path={'/profile/:userId?'} render={ () => <ProfileContainer /> } />
            <Route path={'/dialog'} render={ () => <DialogContainer /> } />
            <Route path={'/login'} render={ () => <Login/>} />
        </div>
    );
};

export default Main;