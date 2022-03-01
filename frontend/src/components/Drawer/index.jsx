import styled from 'styled-components'
import { useContext } from 'react'

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
import { TrackexContext } from '../../contexts/trackexContext'

const FormWrapper = styled.div`
  padding: 16px;
  width: 380px;
  height: 100vh;
  overflow: scroll;
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

const RadioOptionsWrapper = styled.div`
  display: flex;
  padding-top: 24px;
`

const TransactionDrawer = ({
  isOpen,
  onClose,
  saveTransaction,
  mode,
  selectedTransaction,
  editTransaction,
}) => {
  const transactionSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too short').required('Required'),
    date: Yup.string().min(10, 'Too short').required('Required'),
    amount: Yup.number()
      .typeError('Amount should be a number')
      .required('Required'),
  })
  const { categories, types } = useContext(TrackexContext)

  const initialValues =
    mode === 'add'
      ? {
          name: '',
          date: '',
          amount: '',
          category: 'eating_out',
          type: 'expense',
        }
      : selectedTransaction
  return (
    <Drawer anchor='right' open={isOpen} onClose={onClose}>
      <FormWrapper>
        <h1>{mode === 'add' ? 'New' : 'Edit'} transaction</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={transactionSchema}
          onSubmit={values => {
            console.log(values)
            mode === 'add' ? saveTransaction(values) : editTransaction(values)
            onClose()
          }}
        >
          {({
            values,
            handleChange,
            touched,
            errors,
            isValid,
            isSubmitting,
          }) => {
            return (
              <>
                <Form>
                  <FieldsWrapper>
                    <TextField
                      fullWidth
                      variant='standard'
                      name='name'
                      value={values.name}
                      onChange={handleChange}
                      label='Name'
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />

                    <TextField
                      fullWidth
                      variant='standard'
                      name='date'
                      value={values.date}
                      onChange={handleChange}
                      label='Date'
                      error={touched.date && Boolean(errors.date)}
                      helperText={touched.date && errors.date}
                    />

                    <TextField
                      fullWidth
                      variant='standard'
                      name='amount'
                      type='number'
                      value={values.amount}
                      onChange={handleChange}
                      label='Amount'
                      error={touched.amount && Boolean(errors.amount)}
                      helperText={touched.amount && errors.amount}
                    />
                  </FieldsWrapper>
                  <RadioOptionsWrapper>
                    <FormControl>
                      <FormLabel id='category'>Category</FormLabel>
                      <RadioGroup
                        aria-labelledby='category'
                        name='category'
                        value={values.category}
                        onChange={handleChange}
                      >
                        {Object.keys(categories).map((category, index) => {
                          return (
                            <FormControlLabel
                              key={index}
                              value={category}
                              control={<Radio />}
                              label={categories[category]}
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
                        value={values.type}
                        name='type'
                        onChange={handleChange}
                      >
                        {Object.keys(types).map((type, index) => {
                          return (
                            <FormControlLabel
                              key={index}
                              value={type}
                              control={<Radio />}
                              label={types[type]}
                            />
                          )
                        })}
                      </RadioGroup>
                    </FormControl>
                  </RadioOptionsWrapper>
                  <ActionsWrapper>
                    <Button variant='outlined' onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      type='submit'
                      variant='contained'
                      disabled={isSubmitting || !isValid}
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

export { TransactionDrawer }
