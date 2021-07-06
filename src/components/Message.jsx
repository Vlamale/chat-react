import React from 'react'

export const Message = ({ message, isYourMessage }) => {

    return (
        <div
            className="message"
            style={{
                backgroundColor: isYourMessage
                    ? '#95bbdf8c'
                    : '#fff'
            }}>
            <strong
                className="message-title"
                style={{ textAlign: isYourMessage ? 'end' : 'start' }}
            >{message[1]}</strong>
            <p>{message[2]}</p>
            <small
                className="message-time"
            >{message[3]}</small>
        </div>

    )
}