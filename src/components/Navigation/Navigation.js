import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={classes.wrapNav}>
            <NavLink to="/profile" className={classes.item} activeClassName={classes.active}>Profile</NavLink>
            <NavLink to="/contacts" className={classes.item} activeClassName={classes.active}>Contacts</NavLink>
            <NavLink to="/chats" className={classes.item}  activeClassName={classes.active}>Dialogs</NavLink>
        </nav>
    )
}

export default Navigation;