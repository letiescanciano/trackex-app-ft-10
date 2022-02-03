import './App.css'

import { NavBar } from './components/NavBar'
import { TransactionsList } from './components/TransactionsList'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { TrackexProvider } from './contexts/trackexContext'

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
      styleOverrides: {
        root: { color: '#fff', fontWeight: 'normal' },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottom: '1px solid #FF7661',
          },
          '&:hover': {
            borderBottom: '1px solid #FF7661',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#fff',
          fontWeight: 600,
          paddingBottom: '16px',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        label: { color: '#FF7661' },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'red',
        },
      },
    },
  },
})
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='layout'>
        <TrackexProvider>
          <NavBar />
          <TransactionsList />
        </TrackexProvider>
      </div>
    </ThemeProvider>
  )
}
export default App
