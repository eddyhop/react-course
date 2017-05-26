// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class NavBarContainer extends Component {

  handleClick(e) {
    this.props.getLatestStuff()
  }

  render() {
    const { user, online, loading } = this.props
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
            <Navbar.Text pullRight>
              { loading ? 
              <i className="fa fa-refresh fa-spin fa-2x" aria-hidden="true"></i>
                :
              <i className="fa fa-refresh fa-2x" aria-hidden="true"
                onClick={this.handleClick.bind(this, "refresh")}
              ></i>
              }
            </Navbar.Text>
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
import { getLatestStuff } from '../../actions/stuff'

const mapStateToProps = (state) => {
  const auth_r = state.get('auth')
  const user = auth_r.get('user') ? auth_r.get('user').toJS() : undefined
  const stuff_r = state.get('stuff')
  return {
    user,
    loading: stuff_r.get('loading')
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
  },
  getLatestStuff() {
    dispatch(getLatestStuff())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)
