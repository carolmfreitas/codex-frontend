import React from 'react'

export default function LoadError() {
    return (
        <div className="text-center">
            <div>
                <h2 className="text-danger">Erro de carregamento</h2>
            </div>
            <button className="btn btn-outline-light btn-lg" onClick={() => window.location.reload(false)}>
                Clique aqui para atualizar a pagina quando o servidor estiver online
            </button>
        </div>
    )
}