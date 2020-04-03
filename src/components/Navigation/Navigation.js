import React from 'react';
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={classes.wrapNav}>
            <a href="" className={classes.item}>Profile</a>
            <a href="" className={classes.item}>Contacts</a>
            <a href="" className={`${classes.item} ${classes.active}`}>Messanges</a>
        </nav>
    );
}

export default Navigation;