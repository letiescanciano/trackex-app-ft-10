import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'

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

const App = () => {
  console.log('App is being rendered')
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

      <main>
        <h1>main</h1>
      </main>
    </div>
  )
}
export default App
