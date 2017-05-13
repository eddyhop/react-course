// @flow

import React, { Component } from 'react'

class SagaContainer extends Component {

  props: {
    token: string,
    loading: string,
    logIn: (email: string, password: string) => void
  }

  onClick(e) {
    this.props.logIn('admin@asdf.asdf', 'asdf')
  }

  render() {
    const { token, loading } = this.props
    return (
      <div>
        <h1>press dis button</h1>
        { token ? 
        <div>You have been logged in!</div>
          :
        <span></span>
        }
        { loading ?
        <span>loading...</span>
          :
        <button onClick={this.onClick.bind(this)}>Log in</button>
        }
      </div>
    )
  }
}

import { connect } from 'react-redux'
import { logIn } from '../../actions/auth'

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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SagaContainer)
