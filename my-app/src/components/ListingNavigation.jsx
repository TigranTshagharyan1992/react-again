import React, {Fragment, useState} from 'react';
import Button from "./ui/Button";
import {differences} from "./data";

const ListingNavigation = () => {
    const [buttonName, setButtonName] = useState(null);
    function handleClick(event){
        setButtonName(event.target.textContent);
    }
    return (
        <Fragment>
            <Button onClick={handleClick} activeButton={buttonName==='Section1'}>Section1</Button>
            <Button onClickk={handleClick} activeButton={buttonName==='Section2'}>Section2</Button>
            <Button onClick={handleClick} activeButton={buttonName==='Section3'}>Section3</Button>
            <Button onClick={handleClick} activeButton={buttonName==='Effect'}>Effect</Button>
            <p>  {
                buttonName ? differences[buttonName] : 'not important'
            }</p>
            <p>  {
                buttonName && differences[buttonName]
            }</p>
            <p>  {
                !buttonName && 'not important'
            }</p>
        </Fragment>
    );
};

export default ListingNavigation;