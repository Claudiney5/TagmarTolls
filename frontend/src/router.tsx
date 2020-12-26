import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Landing from './pages/landing'
import RollDice from './pages/rollDice'
import MyForm from './myForm'
import Attributes from './pages/caractere/attributes'
import Skills from './pages/caractere/skills'

function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={ Landing } />
      <Route path="/dice" component={ RollDice } />
      <Route path="/attributes" component={ Attributes } />
      <Route path="/skills" component={ Skills } />
      <Route path="/myForm" component={ MyForm } />
    </BrowserRouter>
  )
}

export default Routes