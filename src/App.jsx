import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import data from './data'

import { Edit, DeleteForever } from '@mui/icons-material'
const Container = styled.nav`
  height: 100vh;
`
const Logo = styled.img`
  padding: 32px;
  width: 150px;
`
const List = styled.ul`
  list-style-type: none;
  padding: 32px 0;
  margin: 0;
`

const Item = styled.li`
  padding: 16px 24px;
  a {
    text-decoration: none;
    color: ${props => {
      return props.active ? '#FF7661' : 'white'
    }};
    font-weight: ${props => (props.active ? 'bold' : 'normal')};
  }
`

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
const App = () => {
  console.log('App is being rendered')
  const [transactions, setTransactions] = useState([])
  console.log('transactions', transactions)

  useEffect(() => {
    console.log('useEffect first render')
    setTransactions(data)

    // setTimeout(() => {
    //   console.log('Information received from server....')
    //   setTransactions(data)
    // }, 5000)
  }, [])

  // useEffect(() => {
  //   console.log('useEffect transactions')
  // }, [transactions])
  return (
    <div className='layout'>
      <Container>
        <Logo src={logo} />

        <List>
          <Item>
            <a href='/dashboard'>Dashboard</a>
          </Item>
          <Item>
            <a href='/calendar'>Calendar</a>
          </Item>
          <Item active>
            <a href='/transactions'>Transactions</a>
          </Item>
          <Item>
            <a href='/settings'>Settings</a>
          </Item>
        </List>
      </Container>

      <main style={{ width: '100%' }}>
        <h1>Transaction List</h1>
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
      </main>
    </div>
  )
}
export default App
