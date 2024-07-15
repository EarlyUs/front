import axios from 'axios'

const createAxiosClient = () => {
    const instance = axios.create({
        baseURL: '/',
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 1000 * 60,
    })
    return instance
}

const client = createAxiosClient()

export default client
