import axios from 'axios'

const token = localStorage.getItem('token')

const baseURL = process.env.REACT_APP_API_URL
const service = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

const transactionsAPI = {
  all: () => service.get('/transactions'),
  create: data => service.post('/transactions', data),
  update: data => service.put(`/transactions/${data._id}`, data),
  delete: id => service.delete(`/transactions/${id}`),
}

export { transactionsAPI }
