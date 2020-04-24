import React from "react";
import classes from "./Posts.module.css";


const Posts = (props) => {


    return (
        <div className={classes.postsWrap}>
            <div className={classes.postsHeader}>
                <span>Posts</span>
            </div>

            {props.postsElements}


        </div>
    )
};

export default Posts