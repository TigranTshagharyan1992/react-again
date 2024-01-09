import React from 'react';
import {list} from "./data";
import List from "./list";
import {generateKey} from "../helper";

const Listing = () => {
    return (
        <ul>
            {
                list.map((item,key) =>{
                    return <List {...item} key={generateKey(key)}/>;
                })
            }
        </ul>
    );
};

export default Listing;