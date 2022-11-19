import axios from 'redaxios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
})
