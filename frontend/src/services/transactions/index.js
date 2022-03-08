import axios from 'axios'

// const service = axios.create({})

const transactionsAPI = {
  all: () => axios.get('http://localhost:3001/transactions'),
  create: data => {
    console.log('transaction', data)
    return axios.post('http://localhost:3001/transactions', data)
  },
  update: data => {
    return axios.put(`http://localhost:3001/transactions/${data.id}`, data)
  },
}

export { transactionsAPI }
