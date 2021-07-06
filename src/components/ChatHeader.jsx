import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import ChatContext from '../context/chatContext';

export const ChatHeader = () => {

    const { closeChat } = React.useContext(ChatContext)
    return (
        <div className="chat__header">
            <h5 className="chat__header_title">Chat</h5>
            <button className="close-btn" onClick={closeChat}><CloseIcon className="close-icon" /></button>
        </div>
    )
}