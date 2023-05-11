import React from 'react'
import './Modal.css'

const Modal = ({ title, children }) => {
    return (
        <div id='modal'>
            <header>
                <h2>
                    {title}
                </h2>
            </header>
            <main>
                {children}
            </main>
            {/* <footer>
                <button onClick={onCloseModal} id='btnCancel'>
                    {reject}
                </button>
                <button id='btnAdd'>
                    {resolve}
                </button>
            </footer> */}
        </div>
    )
}

export default Modal