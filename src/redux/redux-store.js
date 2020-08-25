import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import chatsReducer from "./chats-reducer";
import contactsReducer from "./contacts-reducer";
import dialogReducer from "./dialog-reducer";
import usersReduser from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profileData: profileReducer,
    chatsData: chatsReducer,
    contactsData: contactsReducer,
    dialogsData: dialogReducer,
    usersData: usersReduser,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;