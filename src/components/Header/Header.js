import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <div className={classes.header__content}>
                    <div className={classes.logo}>
                        ToDoy
                    </div>
                    <div>
                        Вхід
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
