// @flow

import React, { Component } from 'react'

class SagaContainer extends Component {

  props: {
    token: string,
    loading: string,
    logIn: (email: string, password: string) => void
  }

  onClick(type, e) {
    if (type === 'login') {
      this.props.logIn('admin@asdf.asdf', 'asdf')
    } else if (type === 'logout') {
      this.props.logOut();
    }
  }

  render() {
    const { token, loading } = this.props
    return (
      <div>
        <h1>press dis button</h1>
        { token ? 
        <div>
          <p>You have been logged in!</p>
          <button onClick={this.onClick.bind(this, "logout")}>Log out</button>
        </div>
          :
        <div>
          { loading ?
          <p>loading...</p>
            :
          <button onClick={this.onClick.bind(this, "login")}>Log in</button>
          }
        </div>
        }
      </div>
    )
  }
}

import { connect } from 'react-redux'
import { logIn, logOut } from '../../actions/auth'

const mapStateToProps = (state) => {
  const auth_r = state.get('auth')
  return {
    token: auth_r.get('token'),
    loading: auth_r.get('loading')
    // token: auth_r.get('token').toJS(),
    // loading: auth_r.get('loading').toJS()
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

export default connect(mapStateToProps, mapDispatchToProps)(SagaContainer)
