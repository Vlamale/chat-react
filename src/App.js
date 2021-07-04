import React, { useState } from "react"
import Auth from "./components/Auth"
import { BrowserRouter } from 'react-router-dom'
import AppContext from './context/appContext'

function App() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    hasAccount: false,
    messages: [],
    isYourMessage: false,
    showAlert: false,
    alertMessage: '',
    loading: false,
  })

  return (
    <BrowserRouter>
    <AppContext.Provider value={{ loginData, setLoginData }}>
      
        <div className="container">
            <Auth />
        </div>
      
    </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
