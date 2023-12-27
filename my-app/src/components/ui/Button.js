import React from 'react';
import classes from './Button.module.css';
const Button = ({children,activeButton,...props}) => {

    let buttonClass = classes.button;
    if(activeButton) buttonClass += ' '+classes.active;
    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};

export default Button;