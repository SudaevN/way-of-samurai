import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import chatsReducer from "./chats-reducer";
import contactsReducer from "./contacts-reducer";
import dialogReducer from "./dialog-reducer";
import usersReduser from "./users-reducer";

let reducers = combineReducers({
    postsData: profileReducer,
    chatsData: chatsReducer,
    contactsData: contactsReducer,
    dialogsData: dialogReducer,
    usersData: usersReduser
});

let store = createStore(reducers);

export default store;