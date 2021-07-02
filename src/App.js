import React from "react"

function App() {
  return (
    <div className="container">
      <div className="chat">
        <div className="chat__header">
          <h5 className="chat__header_title">Chat</h5>
        </div>
        <div className="chat__place">
          <div className="message-form">
            <img className="message__photo" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"></img>
            <div className="message">
              <p>vrevcedvcfevcrververvvmmmmmm mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
            </div>
          </div>
        </div>
        <form className="send__form">
          <input className="message__input" placeholder="Write your message there" />
          <button className="send-btn">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
