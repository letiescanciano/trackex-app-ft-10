import './App.css'

import { NavBar } from './components/NavBar'
import { TransactionsList } from './components/TransactionsList'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF7661',
      contrastText: '#fff',
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none',
        },
      },
    },
    MuiInputLabel: {
      root: { color: '#fff', fontWeight: 'normal' },
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '1px solid #FF7661',
        },
        '&:hover': {
          borderBottom: '1px solid #FF7661',
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: '#fff',
        fontWeight: 600,
        paddingBottom: '16px',
      },
    },
    MuiRadio: {
      root: {
        color: '#fff',
      },
    },
    MuiIconButton: {
      label: { color: '#FF7661' },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: 'red',
      },
    },
  },
})
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='layout'>
        <NavBar />
        <TransactionsList />
      </div>
    </ThemeProvider>
  )
}
export default App
