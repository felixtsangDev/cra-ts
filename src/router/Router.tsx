import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import React from 'react'
import SampleComponent from '../components/SampleComponent'

interface Props {}

const Router = (props: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <SampleComponent />
        </Route>
        <Redirect to='/404' />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
