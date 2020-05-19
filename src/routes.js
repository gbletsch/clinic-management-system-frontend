import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './components/Main'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Main} exact />
      </Switch>
    </BrowserRouter>
  )
}
