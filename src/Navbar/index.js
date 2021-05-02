import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'
import { postSignOut } from '../services/AuthService'
import { withRouter } from "react-router-dom";

function Navbar({history}) {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleLogout = () => {
        postSignOut().then(res => {
            console.log(res)

            history.push('/')
          })
          .catch(err => console.log(err))
    }


    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar01"
                aria-controls="navbar01"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleToggle}
                >
                    <span className="text-white">Menu</span>
            </button>
            <div className={`${isOpen ? 'show' : ''} collapse navbar-collapse justify-content-between`} id="navbar01">
                <ul className="navbar-nav mr auto">
                    <li className="nav-item">
                        <NavLink to="/home" className="nav-link" onClick={handleToggle}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/task-list" className="nav-link" onClick={handleToggle}>Lista de Tarefas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/task-form" className="nav-link" onClick={handleToggle}>Cadastrar Tarefa</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ml auto">
                    <li className="nav-item">
                        <div style={{cursor: 'pointer'}} className="nav-link" onClick={handleLogout}>Logout</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);