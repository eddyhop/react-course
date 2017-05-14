import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import FrontPage from './components/app/FrontPage'
import OtherPage from './components/app/OtherPage'
import AuthenticatedPage from './components/app/AuthenticatedPage'
import HiddenPage from './components/app/HiddenPage'

import NavBar from './components/navbar/NavBar'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/hidden' component={HiddenPage} />
      <Route path='' render={() => 
        <main className="main-container">
          <NavBar></NavBar>
          <Route path='/' exact component={FrontPage} />
          <Route path='/other' component={OtherPage} />
          <Route path='/authenticated' component={AuthenticatedPage} />
        </main>
      } />
    </Switch>
  </BrowserRouter>
)
