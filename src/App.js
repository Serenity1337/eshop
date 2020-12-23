import React, { useState, useMemo, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './app.css'
import { Navbar } from './Components/Navbar/Navbar'
import { UserContext } from './UserContext'
import { Footer } from './Components/Footer/Footer'
import { Routes } from './Routes'
import { getSingleUser } from './Api'
function App() {
  const [user, setuser] = useState({})
  const userValue = useMemo(() => ({ user, setuser }), [user, setuser])
  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      const currentUserId = JSON.parse(localStorage.getItem('user'))
      if (currentUserId.id)
        getSingleUser(currentUserId.id).then((result) => {
          if (result) setuser(result)
        })
    }
  }, [])
  return (
    <div>
      <UserContext.Provider value={userValue}>
        <Navbar />

        <Switch>
          {Routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              exact={route.exact}
              label={route.label}
            ></Route>
          ))}
        </Switch>
        <Footer />
      </UserContext.Provider>
    </div>
  )
}

export default App
