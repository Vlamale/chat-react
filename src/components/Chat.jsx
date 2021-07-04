import React, { useContext } from "react"
import { ChatHeader } from "./ChatHeader"
import { ChatPlace } from "./ChatPlace"
import { SendForm } from "./SendForm"
import ChatContext from "../context/chatContext"
import AppContext from '../context/appContext'
import { NavLink } from "react-router-dom"


export function Chat() {
    const [value, setValue] = React.useState('')
    
    const {loginData, setLoginData} = useContext(AppContext)

    function closeChat() {
        setLoginData({
            ...loginData,
            hasAccount: false
        })
    }
    

    return (
        <ChatContext.Provider value={{setValue, value, loginData, closeChat}}>
            <div className="chat">
                <ChatHeader />
                <ChatPlace />
                <SendForm />
            </div>
        </ChatContext.Provider>
    )
}