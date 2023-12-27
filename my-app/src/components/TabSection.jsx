import React from 'react';
import Button from "./ui/Button";

const TabSection = ({onClick, tab}) => {
    return (
        <section>
            <Button onClick={() => onClick('Home page')} activeButton={tab==='Home page'?'active':''}>Home page</Button>
            <Button onClick={() => onClick('Page 2')} activeButton={tab==='Page 2'?'active':''}>Page 2</Button>
            <Button onClick={() => onClick('Form')} activeButton={tab==='Form 2'?'active':''}>Form</Button>
            <Button onClick={() => onClick('Effect')} activeButton={tab==='Effect'?'active':''}>Effect</Button>
        </section>
    );
};

export default TabSection;