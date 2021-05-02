import ApiAxios from '../ApiAxios'

export const checkToken = async (token) => {
    const response = await ApiAxios.post('/auth/check-token', {}, {'headers': {'Content-Type': 'application/json; charset=UTF-8',
    'authorization': 'Bearer ' + token.token}})
    return response.data
}

export const postSignIn = async ({email, password}) => {
    const response = await ApiAxios.post('/auth/login', {email, password})
    return response.data
}

export const postSignUp = async ({name, email, password}) => {
    const response = await ApiAxios.post('/auth/register', {name, email, password})
    return response.data
}
