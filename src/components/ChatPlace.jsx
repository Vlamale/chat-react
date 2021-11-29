import React, { useEffect } from 'react'
import ChatContext from '../context/chatContext'
import { Message } from './Message'
import Loader from './Loader'
import firebase from 'firebase'

export const ChatPlace = () => {
    const [messages, setMessages] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const { userData } = React.useContext(ChatContext)
    const fakeDivRef = React.createRef()
    const db = firebase.database()
    const messagesFromDB = db.ref('messages')

    useEffect(() => {

        let cleanupFunction = false;

        if (!cleanupFunction) {
            (async function () {
                try {
                    setLoading(true)
                    await messagesFromDB.on('value', elem => {
                        if (!elem.val()) {
                            messagesFromDB.push('create')
                            return
                        }
                        setMessages(Object.entries(elem.val()))
                        setLoading(false)

                    })
                }
                catch (e) {
                    console.error(e)
                }
            })()
        }

        return () => cleanupFunction = true
    }, [])

    useEffect(() => {
        fakeDivRef.current.scrollIntoView()
    }, [messages])

    return (
        <div className="chat__place">
            {loading && <Loader />}
            {messages.map(([key, message]) => {
                if (message === 'create') {
                    return
                }
                const isYourMessage = userData.email === message[0]
                return (
                    <div
                        className="message-form"
                        key={key}
                        style={{ alignItems: isYourMessage ? 'flex-end' : 'flex-start' }}>
                        <img
                            className="message__photo"
                            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                            alt="user-ph" />
                        <Message message={message} isYourMessage={isYourMessage} />
                    </div>
                )
            })}
            <div ref={fakeDivRef}></div>
        </div>
    )
}