import ApiAxios from '../ApiAxios'

export const getTasks = async () => {
    const response = await ApiAxios.get('/tasks/allTasks', {'headers': {'Content-Type': 'application/json; charset=UTF-8',
    'authorization': 'Bearer ' + localStorage.getItem('task-token')}})
    
    return response.data.data.tasks
}

export const postTask = async ({title, priority, description}) => {
    const status = 1
    const response = await ApiAxios.post('/addTask/' + localStorage.getItem('id'), {title, priority, description}, {'headers': {'Content-Type': 'application/json; charset=UTF-8',
    'authorization': 'Bearer ' + localStorage.getItem('task-token')}})
    return response.data
}

export const getTaskById = async (id) => {
    const response = await ApiAxios.get(`/tasks/${id}`)
    return response.data
}

export const putTask = async (id, {title, description, status, created_at}) => {
    const response = await ApiAxios.put(`/tasks/${id}`, {title, description, status, created_at})
    return response.data
}

export const deleteTaskById = async (id) => {
    await ApiAxios.delete(`/tasks/${id}`)
}