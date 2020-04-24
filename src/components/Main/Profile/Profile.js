import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Textarea from "./Textarea/Textarea";
import Posts from "./Posts/Posts";


const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <Textarea refreshPostText={props.refreshPostText} addPost={props.addPost} newPostText={props.newPostText} />
            <Posts postsElements={props.postsElements}/>
        </div>
    );
};

export default Profile;