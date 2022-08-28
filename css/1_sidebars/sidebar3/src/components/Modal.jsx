import React from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './Form';


const Modal = ({setModal,customerE}) => {

    const closeModal = () => {
        setModal(false);
    }


    return (  
        <>
            <div className='overlay'>
                <div className='content-modal'>
                    <div className='header-modal'>
                        <h1>Titulo</h1>
                    </div>
                    <button 
                        onClick={() => closeModal()}
                        className='btn-close-modal'
                    >
                        <FontAwesomeIcon icon={faClose}/>
                    </button>
                    <div>
                        <Form  
                            customerE={customerE}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Modal;