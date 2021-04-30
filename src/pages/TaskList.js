import React, {useState, useEffect } from 'react'
import {getTasks, deleteTaskById} from '../services/TaskService'
import moment from 'moment'
import {FaPencilAlt, FaRegTrashAlt} from 'react-icons/fa'

export default function TaskList(history) {
    
    const [tasks, setTasks] = useState([])
    const [taskError, setTaskError] = useState('')

    useEffect(() => {
        reloadTasks()
    }, [])
    

    const reloadTasks = () => {
        getTasks()
            .then(res => setTasks(res))
            .catch(err => setTaskError(err))
    }
    
    const onEdit = (id) => {
        history.push('task-edit', {id})
    }

    const onDelete = (id) => {
        deleteTaskById(id)
            .then(() => {
                reloadTasks()
            })
            .catch(err => setTaskError(err))
    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    {
                    taskError
                    ? (
                        <div>
                            <h2>Algo deu errado, entre em contato com o admnistrador do sistema</h2>
                        </div>
                    )
                    : tasks.map(t => (
                        <div className="col-md-3 p-2" key={t.id}>
                            <div className="card">
                                <div className="card-header text-white text-weight-bold text-uppercase">
                                    <h4 className="card-text text-center">{t.title}</h4>
                                </div>
                                <div className="card-body">
                                    <p>{t.description}</p>
                                    <p>{
                                        t.status === 1 ? 'Para Fazer'
                                        : t.status === 2 ? 'Fazendo'
                                        : t.status === 3 ? 'Feita'
                                        : ''
                                        }</p>
                                </div>
                                <div className="card-body">
                                    <p>Adicionado em {moment(t.created_at).fromNow()}</p>
                                    <p>Atualizado em {moment(t.updated_at).fromNow()}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <button className="btn btn-outline-light border-0" onClick={() => onEdit(t.id)}><FaPencilAlt /></button>
                                    <button className="btn btn-outline-light border-0" onClick={() => {
                                        if (window.confirm('Tem certeza?')) onDelete(t.id)
                                    }}><FaRegTrashAlt /></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            
        </div>
    )
}