import React from 'react'
import './User.css'

const User = ({ ime, prezime, email, godine, zanimanje, onHandleMarked }) => {
    return (
        <div className='divUser'>
            <div>{ime}</div>
            <div>{prezime}</div>
            <div>{email}</div>
            <div>{godine}</div>
            <div>{zanimanje}</div>
            <input onChange={onHandleMarked} type="checkbox" id='checkbox' />
        </div>
    )
}

export default User