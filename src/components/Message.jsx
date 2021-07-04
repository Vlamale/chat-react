import React from 'react'

export const Message = ({ message, isYourMessage }) => {

    return (
        <div className="message" style={{ backgroundColor: isYourMessage ? '#95bbdf8c' : '#fff' }}>
            <strong className="message-title">{message[0]}</strong>
            <p>{message[1]}</p>
            <small className="message-time">{message[2]}</small>
        </div>

    )
}