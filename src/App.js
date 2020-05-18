import React from 'react'
import 'normalize.css'
import './global.css'

import Routes from './routes'
import Toolbar from './components/Toolbar'


function App() {
  return (
    <div className="app">
      <Toolbar />
      <Routes />
    </div>
  );
}

export default App;
