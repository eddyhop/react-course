// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class NavBarContainer extends Component {

  render() {
    const { user, online } = this.props
    console.log(online)
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">FrontPage</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/other">                
              <NavItem>OtherPage</NavItem>
            </LinkContainer>
            <LinkContainer to="/authenticated">
              <NavItem>AuthenticatedPage</NavItem>
            </LinkContainer>
            <LinkContainer to="/hidden">
              <NavItem>HiddenPage</NavItem>
            </LinkContainer>
          </Nav>
            { user ? 
            <Navbar.Text pullRight>{ user.email }</Navbar.Text>
              :
            <Navbar.Text pullRight>Not Logged In</Navbar.Text>
            }
            { online ? 
            <Navbar.Text pullRight>Online</Navbar.Text>
              :
            <Navbar.Text pullRight>Offline</Navbar.Text>
            }
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

import { connect } from 'react-redux'
import { logIn, logOut } from '../../actions/auth'

const mapStateToProps = (state) => {
  const auth_r = state.get('auth')
  const user = auth_r.get('user') ? auth_r.get('user').toJS() : undefined
  const client_r = state.get('client')
  return {
    user,
    online: client_r.get('online')
  }
}

const mapDispatchToProps = (dispatch) => ({
  logIn(email, password) {
    dispatch(logIn({
      email,
      password
    }))
  },
  logOut() {
    dispatch(logOut())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)
