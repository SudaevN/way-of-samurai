import {applyMiddleware, combineReducers, compose, createStore} from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// createStore - default method
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// open store for console
// window.store = store;

export default store;