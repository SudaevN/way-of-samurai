import React from 'react';
import classes from './Main.module.css';
import Chats from "./Chats/Chats";
import Contacts from "./Contacts/Contacts";
import Profile from "./Profile/Profile";
import {Route} from "react-router-dom";
import DialogContainer from "./Dialog/DialogContainer";


const Main = (props) => {

    return (
        <div className={classes.wrapMain}>
            <Route path={'/chats'} render={ () => <Chats messageData={props.store.getState().chatsData}/> } />
            <Route path={'/contacts'} render={ () => <Contacts contactsData={props.store.getState().contactsData}/> } />
            <Route path={'/profile'} render={ () => <Profile store={props.store} /> } />
            <Route path={'/dialog'} render={ () => <DialogContainer store={props.store} /> } />
        </div>
    );
};

export default Main;