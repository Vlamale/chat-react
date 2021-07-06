import React from 'react'
import ChatContext from '../context/chatContext'
import firebase from 'firebase'

export const SendForm = () => {

    const { setValue, value, userData } = React.useContext(ChatContext)

    function sendMessage(e) {
        e.preventDefault()

        if (!value.trim()) {
            return
        }

        const db = firebase.database()
        db.ref('messages').push([userData.email, userData.displayName, value, new Date().toLocaleTimeString()])
        setValue('')
    }

    return (
        <form className="send__form" onSubmit={sendMessage}>
            <input
                className="message__input"
                placeholder="Write your message there"
                value={value}
                onChange={e => setValue(e.target.value)} />
            <button className="send-btn">Send</button>
        </form>
    )
}