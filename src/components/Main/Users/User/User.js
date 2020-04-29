import React from "react";
import classes from "./User.module.css";

const User = (props) => {
    return (
        <div key={props.id} className={classes.userBox}>
            <img alt="" src={props.userPhoto} className={classes.userAva}/>
            <div className={classes.rightSide}>
                <div className={classes.aboutUser}>
                    <span className={classes.name}>{props.name}</span>
                    <span className={classes.status}>{props.status}</span>
                    <span className={classes.homePlanet}>{props.homePlanet}</span>
                </div>
                <button onClick={props.onClick} className={classes.friendBtn}>
                    {props.buttonText}
                </button>
            </div>
        </div>)
};

export default User;