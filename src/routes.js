import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Teleconsulta from './pages/Teleconsulta'
// import Login from './pages/Login'
// import UserRegister from './pages/UserRegister'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Teleconsulta} exact />
        {/* <Route path='/login' component={Login} />
        <Route path='/user/register' component={UserRegister} /> */}
      </Switch>
    </BrowserRouter>
  )
}
