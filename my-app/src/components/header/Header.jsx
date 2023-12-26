import {useState} from "react";

export default function Header(){
    const [now,setNow] = useState(new Date());
    setInterval(() =>{
        setNow(new Date());
    },1000)
    return (
        <header>
            <h1>
                super header
            </h1>
            <span>
                time : {now.toLocaleTimeString()}
            </span>
        </header>
    )
}