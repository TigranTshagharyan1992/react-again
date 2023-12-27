import React, {useState} from 'react';
import Button from "./ui/Button";
import Modal from "./Modal/Modal";

const EffectSection = () => {

    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(!showModal);
    }

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
        </section>
    );
};

export default EffectSection;