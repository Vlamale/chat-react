import React, { useContext } from "react"
import { ChatHeader } from "./ChatHeader"
import { ChatPlace } from "./ChatPlace"
import { SendForm } from "./SendForm"
import ChatContext from "../context/chatContext"
import AppContext from '../context/appContext'


export function Chat() {
    const [value, setValue] = React.useState('')

    const { userData, setUserData } = useContext(AppContext)

    function closeChat() {
        setUserData({
            ...userData,
            email: '',
            hasAccount: false,
        })

        localStorage.setItem('userStorageData', JSON.stringify({ email: '', hasAccount: false, displayName: '' }))
    }


    return (
        <ChatContext.Provider value={{ setValue, value, userData, closeChat }}>
            <div className="chat">
                <ChatHeader />
                <ChatPlace />
                <SendForm />
            </div>
        </ChatContext.Provider>
    )
}