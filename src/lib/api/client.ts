import axios from 'axios'
import nookies from 'nookies'

const apiClient = axios.create({
  baseURL: `http://${process.env.TRIPAPP_API_URL}:${process.env.TRIPAPP_API_PORT}/api/v1`,
})

apiClient.interceptors.request.use(
  (config) => {
    const cookies = nookies.get(undefined)
    const token = cookies.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default apiClient