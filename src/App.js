import React, { useState } from "react"
import Auth from "./components/Auth"
import { BrowserRouter } from 'react-router-dom'
import AppContext from './context/appContext'
import { getDataFromStorage } from "./utils"

function App() {

  const [userData, setUserData] = useState({
    email: getDataFromStorage('userStorageData', 'email') || '',
    password: '',
    hasAccount: getDataFromStorage('userStorageData', 'hasAccount') || false,
    showAlert: false,
    alertMessage: '',
    displayName: getDataFromStorage('userStorageData', 'displayName') || 'user'
  })

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ userData, setUserData }}>

        <div className="container">
          <Auth />
        </div>

      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
