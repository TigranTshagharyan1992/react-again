import React from 'react';
import Button from "./ui/Button";

const TabSection = ({onClick, tab}) => {
    return (
        <section>
            <Button handleClick={() => onClick('Home page')} activeButton={tab==='Home page'?'active':''}>Home page</Button>
            <Button handleClick={() => onClick('Page 2')} activeButton={tab==='Page 2'?'active':''}>Page 2</Button>
        </section>
    );
};

export default TabSection;