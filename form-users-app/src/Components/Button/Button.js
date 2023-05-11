import React from 'react'
import './Button.css'

const Button = ({ onShowModal }) => {


    return (
        <button onClick={onShowModal} id='addUser'>Add User</button>
    )
}

export default Button