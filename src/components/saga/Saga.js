// @flow

import React, { Component } from 'react';

class SagaContainer extends Component {

  onClick(e) {
    this.props.sagaTest({type: 'LOG_IN', payload: {
      password: 'asdf',
      email: 'faggot'
    }})
  }

  render() {
    return (
      <div>
        <h1>press dis button</h1>
        <button onClick={this.onClick.bind(this)}></button>
      </div>
    );
  }
})

import { connect } from 'react-redux'
import { sagaTest } from '../../actions/auth'

const mapDispatchToProps = (dispatch) => ({
  sagaTest() {
    dispatch(sagaTest())
  }
})

export default connect(null, mapDispatchToProps)(SagaContainer)
