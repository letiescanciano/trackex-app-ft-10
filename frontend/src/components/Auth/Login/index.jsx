import { useContext } from 'react'
import styled from 'styled-components'
import logo from '../../NavBar/logo.svg'

import * as Yup from 'yup'
import { Formik, Form } from 'formik'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { DebugFormik } from '../../../aux/DebugFormik'
import { AuthContext } from '../../../contexts/Auth'
import Snackbar from '@mui/material/Snackbar'

const userSchema = Yup.object().shape({
  email: Yup.string().required('Required field'),
  password: Yup.string().required('Required field'),
})

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`
const Logo = styled.img`s
  width: 150px;
`

export const Login = () => {
  const { login, error } = useContext(AuthContext)
  const handleSubmit = values => {
    login(values.email, values.password)
  }
  console.log('login error', error)
  return (
    <div>
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={6000}
        onClose={() => console.log('close')}
        message={error}
      />

      <Container>
        <Logo src={logo} />
        <Formik
          initialValues={{ email: 'letiapp5@gmail.com', password: '12345678' }}
          validationSchema={userSchema}
          onSubmit={handleSubmit}
        >
          {({
            isSubmitting,
            isValid,
            values,
            handleChange,
            touched,
            errors,
          }) => {
            return (
              <>
                <Form>
                  <TextField
                    style={{ marginBottom: '16px' }}
                    fullWidth
                    id='email'
                    name='email'
                    label='Email'
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    style={{ marginBottom: '32px' }}
                    fullWidth
                    id='password'
                    name='password'
                    label='Password'
                    type='password'
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />

                  <Button
                    fullWidth
                    variant='contained'
                    color='primary'
                    type='submit'
                    disabled={!isValid || isSubmitting}
                  >
                    Log in
                  </Button>
                </Form>
                {/* <DebugFormik /> */}
              </>
            )
          }}
        </Formik>
      </Container>
    </div>
  )
}
