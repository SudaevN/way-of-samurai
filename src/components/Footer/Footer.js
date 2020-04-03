import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.wrapFooter}>
            <span className={classes.name}>Общалка</span>
        </footer>
    );
}

export default Footer;