import React from "react";
import classes from "./User.module.css";
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={classes.userBox}>
            <NavLink to={"/profile/" + props.id}>
                <img alt="" src={props.userPhoto} className={classes.userAva}/>
            </NavLink>
            <div className={classes.rightSide}>
                <div className={classes.aboutUser}>
                    <span className={classes.name}>{props.name}</span>
                    <span className={classes.status}>{props.status}</span>
                </div>
                <button disabled={props.disabled} onClick={props.onClick} className={classes.friendBtn}>
                    {props.buttonText}
                </button>
            </div>
        </div>)
};

export default User;