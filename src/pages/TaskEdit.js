import React, { useState, useEffect } from 'react';
import {getTaskById, putTask} from "../services/TaskService"
import Navbar from '../Navbar'


export default function TaskEdit({history}) {
  const {id} = history.location.state
  const [task, setTask] = useState('')
  const [taskError, setTaskError] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
      getTaskById(id)
        .then(res => {
          console.log(res)
          setTask(res)
          setTitle(res.task.title)
          setDescription(res.task.description)
        })
        .catch(err => {setTaskError(err); console.log(err)})
  }, [id])

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const toEdit = (event) => {
    event.preventDefault()
    task.title = title
    task.description = description

    putTask(id, task)
      .then(() => history.push('/task-list'))
      .catch(err => setTaskError(err))
  }


  if (taskError) {
    return (
      <>
      <Navbar />
        <div>
          <h2 className="text-danger">Algo deu errado</h2>
        </div>
      </>
      
    )
  } else {
    return (
      <>
      <Navbar />
        <div className="row p-2">
          <div className="col-md-4 p-2"></div>
          <div className="col-md-4 p-2">
            <div className="card bg-primary text-black">
              <div className="card-header text-center">
                <h4 className="card-text">Editar Tarefa</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title" className="form-control-label">Titulo</label>
                    <input
                      type="text"
                      id="title"
                      className="form-control"
                      value={title}
                      onChange={onChangeTitle}
    
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="priority" className="form-control-label">Prioridade</label>
                    <select name="priority">
                        <option value="Alta">Alta</option>
                        <option value="Baixa">Baixa</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description" className="form-control-label">Descrição</label>
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="5"
                      className="form-control"
                      value={description}
                      onChange={onChangeDescription}
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button className="btn btn-outline-light rounded-circle btn-lg" onClick={toEdit}>Editar</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-2"></div>
        </div>
      </>
    )
  }
  
  
}