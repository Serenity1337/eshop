import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { About } from './Pages/About/About'
import './app.css'
import { Home } from './Pages/Home/Home'
import { Shop } from './Pages/Shop/Shop'
import { Register } from './Pages/RegisterPage/Register'
import { Login } from './Pages/LoginPage/Login'
import { Contact } from './Pages/Contact/Contact'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={`/`} component={Home} exact={true} label='Home'></Route>
          <Route
            path={`/about`}
            component={About}
            exact={true}
            label='About'
          ></Route>
          <Route
            path={`/shop`}
            component={Shop}
            exact={true}
            label='Shop'
          ></Route>
          <Route
            path={`/register`}
            component={Register}
            exact={true}
            label='Register'
          ></Route>
          <Route
            path={`/login`}
            component={Login}
            exact={true}
            label='Login'
          ></Route>
          <Route
            path={`/contact`}
            component={Contact}
            exact={true}
            label='contact'
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
