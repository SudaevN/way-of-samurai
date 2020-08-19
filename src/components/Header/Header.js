import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.wrapHeader}>
            <span className={classes.name}>STARNET</span>
            <div className={classes.loginBlock}>
                {props.isAuth ? <div className={classes.usernameBlock}>{props.login} <button onClick={props.logout}>logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;