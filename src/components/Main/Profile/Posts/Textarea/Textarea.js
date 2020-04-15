import React from "react";
import classes from "./Textarea.module.css";
import {addPostActionCreator, refreshPostActionCreator} from "../../../../../redux/state";

const Textarea = (props) => {

    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    };

    let onChangeText = () => {
        let newText = newPost.current.value;
        props.dispatch(refreshPostActionCreator(newText));
    };

    return (
        <div className={classes.textarea}>
            <textarea ref={newPost} className={classes.postInpt} rows="10" value={props.newPostText} onChange={onChangeText}/>
            <button className={classes.addBtn} onClick={addPost}>+ Add post</button>
        </div>
    )
};

export default Textarea;