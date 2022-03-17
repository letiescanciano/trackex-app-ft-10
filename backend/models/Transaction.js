const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: Date,
    amount: Number,
    category: String,
    type: String,
    firebaseId: String,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

module.exports = mongoose.model('Transaction', transactionSchema)
