import React from "react";
import classes from "./Textarea.module.css";



const Textarea = (props) => {

    let addPost = () => {
        props.addPost();
    };

    let onChangeText = (e) => {
        let newText = e.target.value;
        props.refreshPostText(newText);
    };

    return (
        <div className={classes.textarea}>
            <textarea className={classes.postInpt} rows="10" value={props.newPostText} onChange={onChangeText}/>
            <button className={classes.addBtn} onClick={addPost}>+ Add post</button>
        </div>
    )
};

export default Textarea;