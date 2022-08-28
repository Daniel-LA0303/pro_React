import React from 'react';
import reactDom from 'react-dom';
import './Modal.css'

const Modal = ({show, close, title, children}) => {
    return reactDom.createPortal(
        <>
            {

                    <div 
                        className={`modalContainer ${show ? "show" : ""}`}
                        onClick={() => close()}
                    >
                        <div 
                            className="modal"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <header className="modal_header">
                                <h2 className="modal_header_title">{title}</h2>
                                <button 
                                    className='close'
                                    onClick={() => close()}
                                >Close</button>
                            </header>
                            <main className="modal_content">
                                {children}
                            </main>
                            <footer className="modal_footer">
                                <button 
                                    className="modal_close"
                                    onClick={() => close()}
                                >Cancel</button>
                                <button className="submit">Submit</button>
                            </footer>
                        </div>
                    </div>

            }
        </>, document.getElementById("modal")
    );
}
 
export default Modal;