import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import chatsReducer from "./chats-reducer";
import contactsReducer from "./contacts-reducer";
import dialogReducer from "./dialog-reducer";
import usersReduser from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profileData: profileReducer,
    chatsData: chatsReducer,
    contactsData: contactsReducer,
    dialogsData: dialogReducer,
    usersData: usersReduser,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;