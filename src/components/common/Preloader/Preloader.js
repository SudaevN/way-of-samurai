import React from "react";
import classes from './Preloader.module.css';
import loader from "../../../assets/img/loader.gif";

const Preloader = (props) => {
    return (
        <div className={classes.preloaderWrapper}>
            <img src={loader} className={classes.preloaderGif}/>
        </div>
)
};

export default Preloader;