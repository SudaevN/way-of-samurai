import React from 'react';
import StoreContext from "../../../storeContext";
import Profile from "./Profile";
import {addPostActionCreator, refreshPostActionCreator} from "../../../redux/profile-reducer";
import Post from "./Posts/Post/Post";


const ProfileContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().postsData;
                    let newPostText = state.newPostText;
                    let postsElements = state.dart.map(post => <Post key={post.postId} picUrl={post.picUrl} title={post.title} date={post.date} text={post.text}/>).reverse();

                    let refreshPostText = (newText) => {
                        let action = refreshPostActionCreator(newText);
                        store.dispatch(action);
                    };
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    return (
                        <Profile state={state} refreshPostText={refreshPostText} addPost={addPost} newPostText={newPostText} postsElements={postsElements} />
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default ProfileContainer;