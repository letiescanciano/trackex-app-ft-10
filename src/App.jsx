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
