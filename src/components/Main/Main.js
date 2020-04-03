import React from 'react';
import classes from './Main.module.css';
import Chats from "./Chats/Chats";

const Main = () => {
    return (
        <div className={classes.wrapMain}>
            <Chats/>
        </div>
    );
}

export default Main;