import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.postItem}>
            <div className={classes.postHeader}>
                <img className={classes.postPicture} src={props.picUrl} alt=""/>
            </div>
            <h3 className={classes.postTitle}>{props.title}</h3>
            <span>{props.date}</span>
            <p>{props.text}</p>
        </div>
    )
}

export default Post;