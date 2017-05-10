// @flow

import React, { Component } from 'react';

class SagaContainer extends Component {

  onClick(e) {
    this.props.logIn('asdf@asdf.asdf', 'asdfasdf')
  }

  render() {
    return (
      <div>
        <h1>press dis button</h1>
        <button onClick={this.onClick.bind(this)}>Log in</button>
      </div>
    );
  }
}

import { connect } from 'react-redux'
import { logIn } from '../../actions/auth'

const mapDispatchToProps = (dispatch) => ({
  logIn(email, password) {
    dispatch(logIn({
      email,
      password
    }))
  }
})

export default connect(null, mapDispatchToProps)(SagaContainer)
