import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({ baseURL })

// attach token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Auth
export const register = (data) => {
  return api.post('/auth/register', {
    name: data.username,   // backend expects "name"
    email: data.email,
    password: data.password
  })
}
export const login = (data) => api.post('/auth/login', data)
export const getProfile = () => api.get('/auth/me')

// Movies
export const getMovies = () => api.get('/movies')
export const createMovie = (data) => api.post('/movies', data)
export const deleteMovie = (id) => api.delete(`/movies/${id}`)

// Series
export const getSeries = () => api.get('/series')
export const createSeries = (data) => api.post('/series', data)
export const deleteSeries = (id) => api.delete(`/series/${id}`)

// Favorites
export const getFavorites = () => api.get('/favorites')
export const addFavorite = (item) => api.post('/favorites', item)
export const removeFavorite = (id) => api.delete(`/favorites/${id}`)

export default api
