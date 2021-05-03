import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {postSignUp} from '../services/AuthService'
import {FaEyeSlash, FaEye} from 'react-icons/fa'


export default function Register() {

    const [emailInvalid ,setEmailInvalid] = useState('')
    const [email, setEmail] = useState('')
    const [nameInvalid, setNameInvalid] = useState('')
    const [name, setName] = useState('')
    const [passwordInvalid ,setPasswordInvalid] = useState('')
    const [password, setPassword] = useState('')
    const [eye, setEye] = useState(false)


    const history = useHistory()

    const onChangeNome = (event) => {
        setNameInvalid('')
        setName(event.target.value)
    }

    const onChangeEmail = (event) => {
        setEmailInvalid('')
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPasswordInvalid('')
        setPassword(event.target.value)
    }

    const toRegister = () => {
        if (!email.match(/\S+@\S+\.\S+/)) {
            setEmailInvalid('Insira um email valido')
        } else if (!password) {
            setPasswordInvalid('Insira uma senha')
        }

        postSignUp({name, email, password}).then(status => {
            history.push('/')
        }).catch(err => console.log(err))
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
                        <h4 className="card-text">Registre-se</h4>
                    </div>
                    <div className="card-body">
                        <form>
                        <div className="form-group">
                                <label htmlFor="name" className="form-control-label">Nome</label>
                                <input 
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    value={name}
                                    onChange={onChangeNome}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-control-label">Email</label>
                                <input 
                                    type="text"
                                    id="email"
                                    className="form-control"
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-control-label">Password</label>
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
                        <button className="btn btn-outline-light btn-lg" onClick={toRegister}>Register</button>
                        
                    </div>
                </div>
            </div>
            <div className="col-md-4 p-2"></div>
        </div>
    )
}