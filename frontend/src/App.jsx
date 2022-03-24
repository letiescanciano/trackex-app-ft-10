import './App.css'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { TrackexProvider } from './contexts/trackexContext'
import { AuthProvider } from './contexts/Auth'

import { AppRoutes } from './components/AppRoutes'
import { AuthStateChanged } from './components/AuthStateChanged'
import { BrowserRouter } from 'react-router-dom'
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
        input: {
          color: '#fff',
        },
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
          backgroundColor: '#1C2633',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
})
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <AuthStateChanged>
            <TrackexProvider>
              <AppRoutes />
            </TrackexProvider>
          </AuthStateChanged>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
export default App
