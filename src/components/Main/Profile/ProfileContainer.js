import React from 'react';
import Profile from "./Profile";
import {addPostActionCreator, refreshPostActionCreator} from "../../../redux/profile-reducer";
import Post from "./Posts/Post/Post";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newPostText: state.postsData.newPostText,
        postsElements: state.postsData.dart.map(post => <Post key={post.postId} picUrl={post.picUrl} title={post.title} date={post.date} text={post.text}/>).reverse()
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        refreshPostText: (newText) => {
            dispatch(refreshPostActionCreator(newText));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;