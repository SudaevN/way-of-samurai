import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import avatarEmpty from "../../../../assets/img/no_photo.png";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return (
            <Preloader/>
        )
    } else {
        return (
            <div className={classes.profileInfo}>
                <div className={classes.profilePicture}>
                    <img src={(props.profile.photos.large) ? props.profile.photos.large : avatarEmpty} alt=""/>
                </div>
                <div className={classes.profileDescription}>
                    <span className={classes.profileName}>{props.profile.fullName}</span>
                    <span className={classes.profileStatus}>{props.profile.aboutMe}</span>
                </div>
            </div>
        )
    }
};

export default ProfileInfo;