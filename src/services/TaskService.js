import ApiAxios from '../ApiAxios'

export const getTasks = async () => {
    const response = await ApiAxios.get('/tasks/allTasks', {'headers': {'Content-Type': 'application/json; charset=UTF-8',
    'authorization': 'Bearer ' + localStorage.getItem('token')}})
    
    return response.data.data.tasks
}

export const postTask = async ({title, priority, description}) => {
    const response = await ApiAxios.post('/tasks/addTask/' + localStorage.getItem('id'), {title, priority, description}, {'headers': {'Content-Type': 'application/json; charset=UTF-8',
    'authorization': 'Bearer ' + localStorage.getItem('token')}})
    return response.data
}

export const getTaskById = async (id) => {
    const response = await ApiAxios.get(`/tasks/${id}`, {'headers': {'Content-Type': 'application/json; charset=UTF-8',
    'authorization': 'Bearer ' + localStorage.getItem('token')}})
    return response.data
}

export const putTask = async (id, {title, description}) => {
    const response = await ApiAxios.patch(`/tasks/update/${id}`, {title, description, userId: localStorage.getItem('id')}, {'headers': {'Content-Type': 'application/json; charset=UTF-8',
    'authorization': 'Bearer ' + localStorage.getItem('token')}})
    return response.data
}

export const deleteTaskById = async (id) => {
    const response = await ApiAxios.delete(`/tasks/remove/${id}`, {'headers': {'Content-Type': 'application/json; charset=UTF-8',
    'authorization': 'Bearer ' + localStorage.getItem('token')}})
    return response.data
}