import React from 'react'
import './../Button/Button.css'

const DeleteUser = ({ onHandleDelete }) => {
    return (
        <button onClick={onHandleDelete} className='btnDelete'>Delete</button>
    )
}

export default DeleteUser