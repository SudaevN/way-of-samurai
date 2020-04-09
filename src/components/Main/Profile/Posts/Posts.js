import React from "react";
import classes from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = (props) => {

    let postsElements = props.postsData.map( post => <Post key={post.postId}  picUrl={post.picUrl} title={post.title} date={post.date} text={post.text} />)

    let func = () => { alert('Do you want add a post?') }

    return (
        <div className={classes.postsWrap}>
            <div className={classes.postsHeader}>
                <span>Posts</span>
                <button onClick={ func }>+ Add post</button>
            </div>

            {postsElements}
        </div>
    )
}

export default Posts