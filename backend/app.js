require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const authMiddleware = require('./middlewares/auth')

const Transaction = require('./models/Transaction')
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://ft-10-trackex-app.s3-website.eu-central-1.amazonaws.com',
  ],
}

mongoose
  .connect(process.env.DB)
  .then(x => {
    console.log(`Connected to Mongo! Database name: ${x.connections[0].name}`)
  })
  .catch(err => console.log(err))
app.use(cors(corsOptions))
app.use(express.json())
app.use(authMiddleware)
// GET /transactions
app.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find({
      firebaseId: req.firebaseUser.uid,
    })

    res.status(200).json(transactions)
  } catch (error) {
    res.status(404).json({ message: 'Bad request' })
  }
})

// app.get('/transactions/:id', (req, res) => {
//   const id = req.params.id
//   console.log('id', id)
//   const transaction = db.get('transactions').getById(id).value()
//   console.log('transaction', transaction)
//   if (transaction) {
//     res.status(200).json(transaction)
//   } else {
//     res.status(404).json({ message: 'Wrong id. Try again' })
//   }
// })

app.post('/transactions', async (req, res) => {
  console.log('req.body', req.body)
  const { name, amount, date, category, type } = req.body
  const transaction = {
    name,
    amount,
    date,
    category,
    type,
    firebaseId: req.firebaseUser.uid,
  }

  try {
    const createdTransaction = await Transaction.create(transaction)
    res.status(201).json(createdTransaction)
  } catch (error) {
    res.status(404).json(error.message)
  }
})

app.put('/transactions/:id', async (req, res) => {
  // Get id from path (params)
  console.log('req.params', req.params)
  const { id } = req.params
  //Get body from request
  const { name, amount, date, category, type } = req.body
  // Find the transaction with by id from the database
  // if it matches, we'll update the transaction

  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      { name, amount, date, category, type },
      { new: true }
    )
    if (updatedTransaction) {
      res.status(200).json(updatedTransaction)
    } else {
      res.status(404).json({ message: 'That transaction does not exist' })
    }
  } catch (error) {
    res.status(404).json(error.message)
  }
})

app.delete('/transactions/:id', async (req, res) => {
  const { id } = req.params

  try {
    const deletedTransaction = await Transaction.findByIdAndRemove(id)
    console.log(deletedTransaction)
    if (deletedTransaction) {
      res.status(200).json(deletedTransaction)
    } else {
      res.status(404).json({ message: 'That transaction does not exist' })
    }
  } catch (error) {
    res.status(404).json(error.message)
  }
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server listening on port ${port}`))
