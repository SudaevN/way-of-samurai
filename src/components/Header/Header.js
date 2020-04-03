import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.wrapHeader}>
            <span className={classes.name}>Общалка</span>
        </header>
    );
}

export default Header;