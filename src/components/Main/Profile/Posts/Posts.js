import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import Textarea from "./Textarea/Textarea";

const Posts = (props) => {

    let postsElements = props.postsData.dart.map(post =>
        <Post key={post.postId} picUrl={post.picUrl} title={post.title} date={post.date} text={post.text}/>).reverse();

    return (
        <div className={classes.postsWrap}>
            <div className={classes.postsHeader}>
                <span>Posts</span>
            </div>
            <Textarea newPostText={props.postsData.newPostText} dispatch={props.dispatch}/>

            {postsElements}


        </div>
    )
};

export default Posts