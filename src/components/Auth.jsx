import React, { useContext } from 'react'
import firebase from 'firebase'
import AuthContext from '../context/authContext'
import AppContext from '../context/appContext'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { Chat } from "./Chat";
import Alert from './Alert'

export default function Login() {

    const { setLoginData, loginData } = useContext(AppContext)

    function showAlert(message, delay) {
        setLoginData({
            ...loginData,
            showAlert: true,
            alertMessage: message
        })
        setTimeout(() => {
            setLoginData({
                ...loginData,
                showAlert: false
            })
        }, delay)
    }

    function changeInput({ target }) {
        const key = target.getAttribute('data-id')
        setLoginData({
            ...loginData,
            [key]: target.value
        })
    }

    function signUpFunc(event) {
        event.preventDefault()
        const { email, password } = loginData

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                setLoginData({
                    ...loginData,
                    hasAccount: true,
                })
            })
            .catch(error => showAlert(error.message, 2500))
    }

    function signInFunc(event) {
        event.preventDefault()
        const { email, password } = loginData

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                setLoginData({
                    ...loginData,
                    hasAccount: true,
                })
            })
            .catch(error => {
                showAlert(error.message, 2500)
            })
    }

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{ changeInput, signUpFunc, signInFunc }}>
                {loginData.showAlert 
                && <Alert message={loginData.alertMessage}/>}
                {!loginData.hasAccount
                    ? (<Switch>
                        <Route path="/" component={SignUp} exact />
                        <Route path="/sign-in" component={SignIn} />
                        <Redirect to="/" />
                    </Switch>)
                    : (<Switch>
                        <Route path="/chat" component={Chat} />
                        <Redirect to="/chat" />
                    </Switch>)
                }
            </AuthContext.Provider>
        </BrowserRouter>
    )
}