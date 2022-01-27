import { useEffect, useState } from 'react'
import data from './data'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import Button from '@mui/material/Button'

import { Edit, DeleteForever } from '@mui/icons-material'

import { AddTransactionDrawer } from '../Drawer'
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
  const [openDrawer, setOpenDrawer] = useState(false)

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

  return (
    <main style={{ width: '100%', padding: '32px' }}>
      <Button
        variant='contained'
        onClick={() => {
          setOpenDrawer(true)
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
                <TableCell>{transaction.category}</TableCell>
                <AmountCell type={transaction.type}>
                  {transaction.amount}
                </AmountCell>
                <TableCell>{transaction.type}</TableCell>
                <ActionsCell>
                  <Edit
                    onClick={() => {
                      console.log('Edit transaction')
                    }}
                  />
                  <DeleteForever
                    style={{ color: '#FF7661' }}
                    onClick={() => {
                      console.log('Delete transaction')
                    }}
                  />
                </ActionsCell>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <AddTransactionDrawer
        saveTransaction={saveTransaction}
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />
    </main>
  )
}

export { TransactionsList }
