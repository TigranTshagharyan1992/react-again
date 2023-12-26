import React from 'react';
import classes from './Button.module.css';
const Button = ({children, handleClick,activeButton}) => {

    let buttonClass = classes.button;
    if(activeButton) buttonClass += ' '+classes.active;
    return (
        <button className={buttonClass} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;