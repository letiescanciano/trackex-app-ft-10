import { useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../contexts/Auth'

import logo from './logo.svg'

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

const NavBar = props => {
  const { logout } = useContext(AuthContext)
  return (
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
        <Item onClick={logout}>Log out</Item>
      </List>
    </Container>
  )
}

export { NavBar }
// export default NavBar
