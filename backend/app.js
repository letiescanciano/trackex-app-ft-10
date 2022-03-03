const express = require('express')
const app = express()
const lodashId = require('lodash-id')

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
db._.mixin(lodashId)

app.use(express.json())
// GET /transactions
app.get('/transactions', (request, response) => {
  const transactions = db.get('transactions').value()
  response.status(200).json(transactions)
})

app.get('/transactions/:id', (req, res) => {
  const id = req.params.id
  console.log('id', id)
  const transaction = db.get('transactions').getById(id).value()
  console.log('transaction', transaction)
  if (transaction) {
    res.status(200).json(transaction)
  } else {
    res.status(404).json({ message: 'Wrong id. Try again' })
  }
})

app.post('/transactions', (req, res) => {
  console.log('req.body', req.body)
  const transaction = {
    name: req.body.name,
    amount: req.body.amount,
    date: req.body.date,
    category: req.body.category,
    type: req.body.type,
    created_at: new Date(),
    updated_at: new Date(),
  }

  const createdTransaction = db.get('transactions').insert(transaction).write()

  res.status(201).json(createdTransaction)
})

app.put('/transactions/:id', (req, res) => {
  // Get id from path (params)
  const id = req.params.id
  //Get body from request
  const { name, amount, date, category, type } = req.body
  // Find the transaction with by id from the database
  // if it matches, we'll update the transaction
  const updatedTransaction = db
    .get('transactions')
    .updateById(id, {
      name,
      amount,
      date,
      category,
      type,
      updated_at: new Date(),
    })
    .write()

  if (updatedTransaction) {
    res.status(200).json(updatedTransaction)
  } else {
    res.status(404).json({ message: 'That transaction does not exist' })
  }
})

app.delete('/transactions/:id', (req, res) => {
  const { id } = req.params

  const deletedTransaction = db.get('transactions').removeById(id).write()

  console.log('deletedTransaction', deletedTransaction)
  if (deletedTransaction) {
    res.status(200).json(deletedTransaction)
  } else {
    res.status(404).json({ message: 'That transaction does not exist' })
  }
})


app.listen(3001, () => console.log('Server listening on port 3001'))
