import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import TaskForm from './pages/TaskForm'
import TaskList from './pages/TaskList'

export default function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/task-list" component={TaskList} />
                <Route exact path="/task-form" component={TaskForm} />
            </Switch>
        </BrowserRouter>
    )
}