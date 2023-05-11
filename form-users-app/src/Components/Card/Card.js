import React from 'react'
import './Card.css'

const Card = ({ boja, children }) => {
    return (
        <div className={`${boja} card`}>
            {children}
        </div>
    )
}

export default Card