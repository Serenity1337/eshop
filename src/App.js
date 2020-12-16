import React, { useState, useMemo, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { About } from './Pages/About/About'
import './app.css'
import { Home } from './Pages/Home/Home'
import { Shop } from './Pages/Shop/Shop'
import { Register } from './Pages/RegisterPage/Register'
import { Login } from './Pages/LoginPage/Login'
import { Contact } from './Pages/Contact/Contact'
import { Navbar } from './Components/Navbar/Navbar'
import { UserContext } from './UserContext'
import { Footer } from './Components/Footer/Footer'
function App() {
  const location = useLocation()
  const [user, setuser] = useState({})
  const userValue = useMemo(() => ({ user, setuser }), [user, setuser])
  useEffect(() => {
    fetch('http://localhost:4000/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((header) => {
        if (!header.ok) {
          throw Error(header)
        }
        return header.json()
      })
      .then((response) => {
        if (localStorage.getItem('user') !== null) {
          const currentUserId = JSON.parse(localStorage.getItem('user'))
          console.log()
          const currentUserObj = response.filter(
            (user) => user.id !== currentUserId.id
          )
          setuser(currentUserObj[0])
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  return (
    <div>
      <UserContext.Provider value={userValue}>
        <Navbar />

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
        <Footer />
      </UserContext.Provider>
    </div>
  )
}

export default App
