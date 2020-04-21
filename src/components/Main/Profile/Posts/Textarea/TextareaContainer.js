import React from "react";
import Textarea from "./Textarea";
import {addPostActionCreator, refreshPostActionCreator} from "../../../../../redux/profile-reducer";

const TextareaContainer = (props) => {

    let refreshPostText = (newText) => {
        let action = refreshPostActionCreator(newText);
        props.store.dispatch(action);
    };

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let text = props.store.getState().postsData.newPostText;

    return (
        <Textarea newPostText={text} refreshPostText={refreshPostText} addPost={addPost}/>
    );
};

export default TextareaContainer;