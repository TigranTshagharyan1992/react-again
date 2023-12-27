import React, {useState} from 'react';
import Button from "./ui/Button";
import StateVsRef from "./StateVsRef";

const Form = () => {
    const [form, setForm] = useState({name:'',reason:'problem',fillError:true});

    const changeName = (event) =>{
        setForm( prev => ({...prev, name: event.target.value}));
        let error = !event.target.value.trim().length;
        setForm( prev => ({...prev, fillError: error}));
    }

    return (
        <>
            <form action="">
                <h3>Connect to as</h3>
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" className="control"
                           style={{border: !form.fillError ? null : '1px solid red'}}
                           value={form.name} onChange={changeName}/>
                </div>
                <div>
                    <label htmlFor="reason">Reason</label>
                    <select className="control" id="reason" value={form.reason}  onChange={event=>setForm(prev => ({...prev, reason:event.target.value}))}>
                        <option value="problem">Some problem</option>
                        <option value="help">I need help</option>
                        <option value="offer">Offer</option>
                    </select>
                </div>

                <Button disabled={form.fillError}>Send</Button>
            </form>


          <StateVsRef />
        </>
    );
};

export default Form;