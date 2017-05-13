import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/app/FrontPage'

export default () => (
  <BrowserRouter>
    <Route path='' component={App} />
  </BrowserRouter>
)