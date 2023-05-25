import React, { useState } from 'react';


const Modal = () => {
    const [showModal, setShowModal] = useState(false);


const Modal = () => {
        return(
            <div></div>
            <p>
            Hiii!!
        </p>
        <button>Accept it</button>
        
        )

    return(
    <div>
          <div>Modal</div>
        <button>Open Modal</button>
        {showModal && <MyModal/>}
                
    </div>
      
    )
    }
}

export default Modal;