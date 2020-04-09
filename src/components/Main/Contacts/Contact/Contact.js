import React from "react";
import classes from './Contact.module.css';
import {NavLink} from "react-router-dom";

const Contact = (props) => {
    return (
        <div className={classes.contactCard}>
            <div className={classes.contactPicture}>
                <img src={props.picUrl} alt=""/>
            </div>
            <div className={classes.contactInfo}>
                <span className={classes.contactName}>{props.name}</span>
                <span className={classes.contactStatus}>{props.status}</span>
            </div>
            <div className={classes.contactFunctions}>
                <NavLink to="/profile" className={classes.openBtn}>Open profile</NavLink>
                <NavLink to="/dialog" className={classes.openBtn}>Open dialog</NavLink>
            </div>
        </div>
    )
}

export default Contact;