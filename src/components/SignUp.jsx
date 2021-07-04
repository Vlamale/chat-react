import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import AuthContext from '../context/authContext'

export default function SignUp() {

    const { changeInput, signUpFunc } = React.useContext(AuthContext)

    return (
        <div className="sing-in-up__form">
            <NavLink to="/sign-in"><button type="button" className="btn btn-info sign-btn">Sign in</button></NavLink>
            <form className="form-horizontal login-form" onSubmit={signUpFunc} >
                <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
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
                <div className="form-group">
                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
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
                            <button type="submit" className="btn btn-default">Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}