import React, {useRef, useState} from 'react';

const StateVsRef = () => {

    const input = useRef();
    const [show, setShow] = useState(false);

    function handleKeyDown(event) {
        if(event.key === 'Enter') setShow(true);
    }

    return (
        <div>
            <h3>Input value {show&&input.current?.value}</h3>
            <input type="text"
                   ref={input}
                   onKeyDown={handleKeyDown}/>
        </div>
    );
};

export default StateVsRef;