import React, { useContext } from 'react'
import firebase from 'firebase'
import AuthContext from '../context/authContext'
import AppContext from '../context/appContext'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { Chat } from "./Chat";
import Alert from './Alert'
import { showAlert, validFormData, storage } from '../utils'

export default function Login() {

    const { setUserData, userData } = useContext(AppContext)

    function changeInput({ target }) {
        const key = target.getAttribute('data-id')
        setUserData({
            ...userData,
            [key]: target.value
        })
    }

    function signUpFunc(event) {
        event.preventDefault()
        const { email, password, displayName } = userData

        const formData = {
            email, password, displayName
        }

        const formDoesNotValid = validFormData(formData)
        if (formDoesNotValid) {
            return showAlert(formDoesNotValid.message, formDoesNotValid.delay, userData, setUserData)
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                return result.user.updateProfile({
                    displayName
                })
            })
            .then(() => {
                const userStorageData = {
                    email,
                    displayName,
                    hasAccount: true,
                }
                storage('userStorageData', userStorageData)
                setUserData({
                    ...userData,
                    hasAccount: true,
                })
            })
            .catch(error => showAlert(error.message, 3000, userData, setUserData))
    }

    function signInFunc(event) {
        event.preventDefault()
        const { email, password } = userData

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                const user = firebase.auth().currentUser
                const userStorageData = {
                    email,
                    hasAccount: true,
                    displayName: user.displayName || 'user'
                }
                storage('userStorageData', userStorageData)
                setUserData({
                    ...userData,
                    hasAccount: true,
                    displayName: user.displayName || 'user',
                })
            })
            .catch(error => showAlert(error.message, 3000, userData, setUserData))
    }

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{ changeInput, signUpFunc, signInFunc }}>
                {userData.showAlert
                    && <Alert message={userData.alertMessage} />}
                {!userData.hasAccount
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