import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Teleconsulta from './pages/Teleconsulta'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Teleconsulta} exact />
      </Switch>
    </BrowserRouter>
  )
}
