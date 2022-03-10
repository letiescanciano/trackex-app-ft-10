import axios from 'axios'

const baseURL = 'http://localhost:3001'
const service = axios.create({ baseURL })

const transactionsAPI = {
  all: () => service.get('/transactions'),
  create: data => service.post('/transactions', data),
  update: data => service.put(`/transactions/${data.id}`, data),
  delete: id => service.delete(`/transactions/${id}`),
}

export { transactionsAPI }
