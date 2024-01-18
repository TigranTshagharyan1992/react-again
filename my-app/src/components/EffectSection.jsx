import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Button from "./ui/Button";
import Modal from "./Modal/Modal";
import {generateKey} from "../helper";
import useInput from "../hooks/useInput";

const EffectSection = () => {
    const input = useInput();
    const [showModal, setShowModal] = useState(false);
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);

    function openModal() {
        setShowModal(!showModal);
    }



    const getUsers = useCallback(async ()=>{
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
        setLoading(false);
    },[]);

    useEffect(() => {
        getUsers();
    },[getUsers])


    return (
        <section>
            <h3>Effect</h3>
            <Button onClick={openModal}>Open Information</Button>
           <Modal open={showModal}>
                <h4>hkejhkjehqwehj</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi cumque est magni nam possimus provident quibusdam saepe.
                    Ab accusantium architecto consequatur excepturi id in inventore
                    molestiae rerum saepe suscipit! Aspernatur?</p>
               <Button onClick={()=>setShowModal(false)}>Close modal</Button>
            </Modal>
            {loading && <p>Loading...</p>}

            {!loading &&
                <>
                    <br/>
                    <input type="text" {...input} />
                    <ul>
                        {users.map((user,index) => {
                            return <li key={generateKey(index)}>{user.name}</li>
                        })
                        }

                    </ul>
                </>
            }
        </section>
    );
};

export default EffectSection;