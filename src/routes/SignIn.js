import React, { useState } from 'react'
import {checkToken, postSignIn} from '../services/AuthService'
import {FaEyeSlash, FaEye} from 'react-icons/fa'

export default function SignIn() {

    const [emailInvalid, setEmailInvalid] = useState('')
    const [email, setEmail] = useState('')
    const [passwordInvalid, setPasswordInvalid] = useState('')
    const [password, setPassword] = useState('')
    const [eye, setEye] = useState(false)

    const onChangeEmail = (event) => {
        setEmailInvalid('')
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPasswordInvalid('')
        setPassword(event.target.value)
    }

    const toSignIn = () => {
        if (!email.match(/\S+@\S+\.\S+/)) {
            setEmailInvalid('Insira um email valido')
    } else if (!password) {
            setPasswordInvalid('Insisra uma senha')
    } else {
        setEmailInvalid('')
        setPasswordInvalid('')

        postSignIn({email, password}).then(token => {
            if (token) {
                checkToken(token).then(res => {
                    if (res.status) {
                        localStorage.setItem('task-token', token)
                        window.location.reload(false)
                    }
                }).catch(err => console.log(err))
            }
        }).catch(err => console.log(err))
    }
    }

    const onEye = () => {
        setEye(!eye)
    }

    return (
        <div className="row p-2">
            <div className="col-md-4 p-2"></div>
            <div className="col-md-4 p-2">
                <div className="card bg-primary text-white">
                    <div className="card-header text-center">
                        <h4 className="card-text">Sign In</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="email" className="form-control-label">{emailInvalid ? emailInvalid : 'Email'}</label>
                                <input 
                                    type="text"
                                    id="email"
                                    className="form-control"
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-control-label">{passwordInvalid ? passwordInvalid : 'Password'}</label>
                                <div className="input-group mb-3">
                                    <input 
                                        type={eye ? 'text' : 'password'}
                                        id="password"
                                        className="form-control"
                                        value={password}
                                        onChange={onChangePassword}
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text" onClick={onEye}>{eye ? <FaEye /> : <FaEyeSlash />}</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-light rounded-circle btn-lg" onClick={toSignIn}>Sign In</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4 p-2"></div>
        </div>
    )
}