// @flow

import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

import Saga from '../saga/Saga'

class FrontPage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>wuuuu</p>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          <Saga />
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default FrontPage
