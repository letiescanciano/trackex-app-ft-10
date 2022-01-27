import styled from 'styled-components'
import { useState } from 'react'

import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { DebugFormik } from '../../aux/DebugFormik'

const FormWrapper = styled.div`
  padding: 16px;
  width: 380px;
  height: 100vh;
  overflow: scroll;
  background-color: #252f3d;
  color: white;
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

const categories = [
  { label: 'Eating out', value: 'eating_out' },
  { label: 'Clothes', value: 'clothes' },
  { label: 'Electronics', value: 'electronics' },
  { label: 'Groceries', value: 'groceries' },
]
const types = [
  { label: 'Income', value: 'income' },
  { label: 'Expense', value: 'expense' },
]

const AddTransactionDrawer = ({ isOpen, onClose, saveTransaction }) => {
  const transactionSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too short').required('Required'),
    date: Yup.string().min(10, 'Too short').required('Required'),
    amount: Yup.number()
      .typeError('Amount should be a number')
      .required('Required'),
  })
  return (
    <Drawer anchor='right' open={isOpen} onClose={onClose}>
      <FormWrapper>
        <h1>New transaction</h1>
        <Formik
          initialValues={{
            name: '',
            date: '',
            amount: '',
            category: 'eating_out',
            type: 'expense',
          }}
          validationSchema={transactionSchema}
          onSubmit={values => {
            console.log(values)
            saveTransaction(values)
            onClose()
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
                  <div>
                    <FormControl>
                      <FormLabel id='category'>Category</FormLabel>
                      <RadioGroup
                        aria-labelledby='category'
                        defaultValue='eating_out'
                        name='category'
                        onChange={props.handleChange}
                      >
                        {categories.map((category, index) => {
                          return (
                            <FormControlLabel
                              key={index}
                              value={category.value}
                              control={<Radio />}
                              label={category.label}
                            />
                          )
                        })}
                      </RadioGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel id='type'>Type</FormLabel>
                      <RadioGroup
                        aria-labelledby='type'
                        defaultValue='expense'
                        name='type'
                        onChange={props.handleChange}
                      >
                        {types.map((type, index) => {
                          return (
                            <FormControlLabel
                              key={index}
                              value={type.value}
                              control={<Radio />}
                              label={type.label}
                            />
                          )
                        })}
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <ActionsWrapper>
                    <Button variant='outlined' onClick={onClose}>
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
  )
}

export { AddTransactionDrawer }
