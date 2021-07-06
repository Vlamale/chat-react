import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import AuthContext from '../context/authContext'

export default function SignIn() {

    const { changeInput, signInFunc } = React.useContext(AuthContext)

    return (
        <div className="sing-in-up__form">
            <NavLink to="/"><button type="button" className="btn btn-info sign-btn">Sign up</button></NavLink>
            <form className="form-horizontal login-form" onSubmit={signInFunc}>
                <div className="form-group login-inputs">
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                            data-id="email"
                            placeholder="Email"
                            onChange={changeInput}
                        />
                    </div>
                </div>
                <div className="form-group login-inputs">
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword3"
                            data-id="password"
                            placeholder="Password"
                            onChange={changeInput}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn btn-default">Sign in</button>
                    </div>
                </div>
            </form>
        </div>
    )
}