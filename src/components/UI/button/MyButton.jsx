import React from "react";
// такое задание стилей способствует изоляции стилей
import classes from "./MyButton.module.css"

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;