import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {

    return (
        <div className={classes.profileInfo}>
            <div className={classes.profilePicture}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2jv29amhL_Fikcw4cIv1QB9FRcDOiO2DsU8q2t1Z1wCBYMFWK&usqp=CAU" alt=""/>
            </div>
            <div className={classes.profileDescription}>
                <span className={classes.profileName}>Darth Vader</span>
                <span className={classes.profileStatus}>Join me, and together, we can rule the galaxy as father and son!</span>
            </div>
        </div>
    )
};

export default ProfileInfo;