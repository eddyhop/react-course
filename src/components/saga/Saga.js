// @flow

import React, { Component } from 'react';

class SagaContainer extends Component {

  onClick(e) {
    this.props.logIn('asdf@asdf.asdf', 'asdfasdf')
  }

  render() {
    const { loading } = this.props
    return (
      <div>
        <h1>press dis button</h1>
        { loading ?
        <span>loading...</span>
          :
        <button onClick={this.onClick.bind(this)}>Log in</button>
        }
      </div>
    );
  }
}

import { connect } from 'react-redux'
import { logIn } from '../../actions/auth'

const mapStateToProps = (state) => {
  const auth_r = state.auth;
  return {
    loading: auth_r.loading
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
