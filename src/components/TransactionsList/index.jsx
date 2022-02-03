import { useContext, useEffect, useState } from 'react'
import data from './data'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import Button from '@mui/material/Button'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Edit, DeleteForever } from '@mui/icons-material'

import { TransactionDrawer } from '../Drawer'
import { TrackexContext } from '../../contexts/trackexContext'
const Table = styled.table`
  width: 100%;
  text-align: left;
  padding: 64px;
`

const HeadCell = styled.td`
  padding: 16px 0;
  width: 20%;
`

const TableCell = styled.td`
  padding: 8px 0;
  width: 20%;
`
const AmountCell = styled.td`
  color: ${props => {
    return props.type === 'expense' ? '#FF7661' : '#00E4C6'
  }};
`
const ActionsCell = styled.td`
  display: flex;
  column-gap: 16px;
`

const TransactionsList = () => {
  const [transactions, setTransactions] = useState([])
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const [mode, setMode] = useState('add')
  const [selectedTransaction, setSelectedTransaction] = useState(null)

  const { categories, types } = useContext(TrackexContext)
  useEffect(() => {
    setTransactions(data)
  }, [])

  const saveTransaction = values => {
    let newTransaction = {
      //all information
      id: uuidv4(),
      name: values.name,
      date: values.date,
      amount: values.amount,
      category: values.category,
      type: values.type,
    }
    setTransactions([...transactions, newTransaction])
  }
  const onCloseDrawer = () => setIsOpenDrawer(false)

  const handleEdit = id => {
    console.log('Edit transaction')
    // get data from the selected Transaction
    console.log('transaction id', id)
    // open the drawer
    setMode('edit')
    setIsOpenDrawer(true)
    // Fill the form with the selected transaction data
    const selectedTransaction = transactions.find(
      transaction => transaction.id === id
    )
    setSelectedTransaction(selectedTransaction)
  }

  const editTransaction = values => {
    console.log('editTransaction', values)
    //1. Find the transaction index to edit in the transactions array
    const transactionIndex = transactions.findIndex(
      transaction => transaction.id === values.id
    )
    // 2. We make a copy of our state
    const _transactions = [...transactions]

    // 3. Replace the transaction that we edited
    _transactions[transactionIndex] = values

    //4. Update our state
    setTransactions(_transactions)
    setSelectedTransaction(null)
  }

  const handleDelete = id => {
    //we need to find the transaction that we want to delete
    // we need to open the Dialog
    const selectedTransaction = transactions.find(
      transaction => transaction.id === id
    )
    setSelectedTransaction(selectedTransaction)
    setIsDeleteDialogOpen(true)
  }
  const deleteTransaction = () => {
    // filter transactions for all the ones that don't match
    //update state
    const _transactions = transactions.filter(
      transaction => transaction.id !== selectedTransaction.id
    )
    setTransactions(_transactions)
    setIsDeleteDialogOpen(false)
    setSelectedTransaction(null)
  }

  const handleCloseDialog = () => setIsDeleteDialogOpen(false)
  // Dialog -- cancel--> will close the dialog
  // Dialog -- Delete--> will deleteTransaction + close the dialog
  return (
    <main style={{ width: '100%', padding: '32px' }}>
      <Button
        variant='contained'
        onClick={() => {
          setMode('add')
          setIsOpenDrawer(true)
        }}
      >
        + Add transaction
      </Button>
      <Table>
        <thead>
          <tr>
            <HeadCell>Date</HeadCell>
            <HeadCell>Name</HeadCell>
            <HeadCell>Category</HeadCell>
            <HeadCell>Amount</HeadCell>
            <HeadCell>Type</HeadCell>
            <HeadCell></HeadCell>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.name}</TableCell>
                <TableCell>
                  {/* {
                    categories.find(
                      category => category.value === transaction.category
                    ).label
                  } */}
                  {categories[transaction.category]}
                </TableCell>
                <AmountCell type={transaction.type}>
                  {transaction.amount}
                </AmountCell>
                <TableCell>{types[transaction.type]}</TableCell>
                <ActionsCell>
                  <Edit
                    onClick={() => {
                      handleEdit(transaction.id)
                    }}
                  />
                  <DeleteForever
                    style={{ color: '#FF7661' }}
                    onClick={() => {
                      handleDelete(transaction.id)
                    }}
                  />
                </ActionsCell>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <TransactionDrawer
        saveTransaction={saveTransaction}
        isOpen={isOpenDrawer}
        onClose={onCloseDrawer}
        mode={mode}
        selectedTransaction={selectedTransaction}
        editTransaction={editTransaction}
      />
      <Dialog open={isDeleteDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          Are you sure you want to delete this transaction?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you delete it you won't be able to recover it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={deleteTransaction}>Delete</Button>
        </DialogActions>
      </Dialog>
    </main>
  )
}

export { TransactionsList }
