import React from 'react'
import 'normalize.css'
import './Style.css'

import Top from './components/Top'
import Menu from './components/Menu'
import Routes from './routes'
import Right from './components/Right'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Top />
      <div className="first">
        <Menu />
        <Routes />
        <Right />
      </div>
      <Footer />
    </div>
  );
}

export default App;
