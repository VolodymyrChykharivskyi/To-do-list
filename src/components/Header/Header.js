import React from 'react';
import classes from './Header.module.css';
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <div className={classes.header__content}>
                    <div className={classes.logo}>
                        <h1>Todo<span>List</span></h1>
                    </div>
                    <Navbar />
                </div>
            </div>
        </header>
    );
}

export default Header;
