import React from 'react'
import Navbar from '../Navbar'

export default function Home() {
    return (
        <div><Navbar />
            <div className="card-header text-center">
                <h4 className="card-text text-white">Seja bem vindo!</h4>
            </div>
            <div className="card-body text-center">
                <h4 className="card-text">Acesse o menu de opções caso deseje ir para a página de cadastro de tarefas</h4>
                <h4 className="card-text">ou para a página de listagem de tarefas</h4>
            </div>
        </div>
    )
}