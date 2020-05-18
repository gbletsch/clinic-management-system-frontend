import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainPage from './pages/MainPage'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact />
      </Switch>
    </BrowserRouter>
  )
}
