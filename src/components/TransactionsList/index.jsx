import { useEffect, useState } from 'react'
import data from './data'
import styled from 'styled-components'

import { Edit, DeleteForever } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import TextField from '@mui/material/TextField'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { DebugFormik } from '../../aux/DebugFormik'

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

const FormWrapper = styled.div`
  padding: 16px;
  width: 380px;
  height: 100vh;
  overflow: scroll;
  background-color: white;
  color: black;
`
const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`
const ActionsWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
`

const TransactionsList = () => {
  const [transactions, setTransactions] = useState([])
  const [openDrawer, setOpenDrawer] = useState(false)
  useEffect(() => {
    setTransactions(data)
  }, [])

  const transactionSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too short').required('Required'),
    date: Yup.string().min(10, 'Too short').required('Required'),
    amount: Yup.number()
      .typeError('Amount should be a number')
      .required('Required'),
  })
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
      <Drawer
        anchor='right'
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false)
        }}
      >
        <FormWrapper>
          <h1>New transaction</h1>
          <Formik
            initialValues={{
              name: '',
              date: '',
              amount: '',
            }}
            validationSchema={transactionSchema}
            onSubmit={values => {
              console.log(JSON.stringify(values, null, 2))
              console.log(values)
            }}
          >
            {props => {
              return (
                <>
                  <Form>
                    <FieldsWrapper>
                      <TextField
                        fullWidth
                        variant='standard'
                        name='name'
                        value={props.values.name}
                        onChange={props.handleChange}
                        label='Name'
                        error={Boolean(props.errors.name)}
                        helperText={props.errors.name}
                      />

                      <TextField
                        fullWidth
                        variant='standard'
                        name='date'
                        value={props.values.date}
                        onChange={props.handleChange}
                        label='Date'
                        error={Boolean(props.errors.date)}
                        helperText={props.errors.date}
                      />

                      <TextField
                        fullWidth
                        variant='standard'
                        name='amount'
                        type='number'
                        value={props.values.amount}
                        onChange={props.handleChange}
                        label='Amount'
                        error={Boolean(props.errors.amount)}
                        helperText={props.errors.amount}
                      />
                    </FieldsWrapper>
                    <ActionsWrapper>
                      <Button
                        variant='outlined'
                        onClick={() => {
                          setOpenDrawer(false)
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type='submit'
                        variant='contained'
                        disabled={props.isSubmitting || !props.isValid}
                      >
                        Save
                      </Button>
                    </ActionsWrapper>
                  </Form>
                  <DebugFormik />
                </>
              )
            }}
          </Formik>
        </FormWrapper>
      </Drawer>
    </main>
  )
}

export { TransactionsList }
