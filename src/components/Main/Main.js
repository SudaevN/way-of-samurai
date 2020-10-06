import React from 'react';
import classes from './Main.module.css';
import {Route} from "react-router-dom";
import DialogContainer from "./Dialog/DialogContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import ContactsContainer from "./Contacts/ContactsContainer";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/login";

const ChatsContainer = React.lazy(() => import('./Chats/ChatsContainer'));


const Main = (props) => {

  return (
    <div className={classes.wrapMain}>
      <Route path={'/users'} render={() => <UsersContainer/>}/>
      <Route path={'/chats'} render={() => {
        return <React.Suspense fallback={<div>Загрузка...</div>}><ChatsContainer/></React.Suspense>
      }}/>
      <Route path={'/contacts'} render={() => <ContactsContainer/>}/>
      <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
      <Route path={'/dialog'} render={() => <DialogContainer/>}/>
      <Route path={'/login'} render={() => <Login/>}/>
    </div>
  );
};

export default Main;