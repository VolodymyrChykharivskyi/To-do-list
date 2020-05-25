import React from "react";
import classes from "./Button.module.css";

const Button = ({type, disabled, children}) => {
    const cls = [
        classes.Button,
        classes[type]
    ];
    return (
        <button
            className={cls.join(' ')}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
