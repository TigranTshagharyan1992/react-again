import React from 'react';
import {list} from "./data";
import List from "./list";

const Listing = () => {
    return (
        <ul>
            {
                list.map((item,key) =>{
                    return <List {...item} key={key}/>;
                })
            }
        </ul>
    );
};

export default Listing;