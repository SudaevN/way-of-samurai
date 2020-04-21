import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import TextareaContainer from "./Textarea/TextareaContainer";


const Posts = (props) => {

    let postsElements = props.store.getState().postsData.dart.map(post =>
        <Post key={post.postId} picUrl={post.picUrl} title={post.title} date={post.date} text={post.text}/>).reverse();

    return (
        <div className={classes.postsWrap}>
            <div className={classes.postsHeader}>
                <span>Posts</span>
            </div>
            <TextareaContainer store={props.store}/>

            {postsElements}


        </div>
    )
};

export default Posts