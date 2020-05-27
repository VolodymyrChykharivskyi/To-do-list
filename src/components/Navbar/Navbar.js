import React from 'react';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={classes.navigation}>
            <ul className={classes.ul}>
                <li>Вхід</li>
                <li>Вихід</li>
            </ul>
        </nav>
    );
}

export default Navbar;
