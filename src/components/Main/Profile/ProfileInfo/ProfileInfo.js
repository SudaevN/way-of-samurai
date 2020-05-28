import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import avatarEmpty from "../../../../assets/img/no_photo.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


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
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

                </div>
            </div>
        )
    }
};

export default ProfileInfo;