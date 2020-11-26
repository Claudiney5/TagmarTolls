import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Landing from './pages/landing'
import RollDice from './pages/rollDice'

function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={ Landing } />
      <Route path="/dice" component={ RollDice } />
    </BrowserRouter>
  )
}

export default Routes