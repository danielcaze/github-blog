import axios from 'redaxios'

export const usersApi = axios.create({
  baseURL: 'https://api.github.com/users',
})

export const searchApi = axios.create({
  baseURL: 'https://api.github.com/search',
})

export const reposApi = axios.create({
  baseURL: 'https://api.github.com/repos',
})
