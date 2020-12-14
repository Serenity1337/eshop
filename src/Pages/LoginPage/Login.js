import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router'
import classes from './Login.module.scss'
export const Login = () => {
  const [profile, setprofile] = useState({})
  const [profileErrorState, setprofileErrorState] = useState('')
  const [users, setusers] = useState([])
  const [success, setsuccess] = useState(false)
  useEffect(() => {
    fetch('http://localhost:4000/users', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((header) => {
        if (!header.ok) {
          throw Error(header)
        }
        return header.json()
      })
      .then((response) => {
        setusers(response)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  const accountHandler = (event) => {
    setprofile({ ...profile, [event.target.name]: event.target.value })
  }
  const registerFormHandler = () => {
    console.log(users)
    let userProfile = {}
    let userExists = false
    users.map((user) => {
      if (user.email === profile.email) userProfile = user
      userExists = true
    })
    if (userExists === true) {
      if (profile.password === userProfile.password) {
        let userProfileCopy = { ...userProfile }
        delete userProfileCopy.password
        localStorage.setItem('user', JSON.stringify({ id: userProfileCopy.id }))
        setsuccess(true)
      } else {
        let error = 'Please make sure your email or password is correct'

        setprofileErrorState(error)
      }
    } else {
      let error = 'Please make sure your email or password is correct'
      setprofileErrorState(error)
    }
  }
  return (
    <div className={classes.registerContainer}>
      <div>
        <h1>Enter your credentials to log in</h1>
        <div className={classes.pairing}>
          <input
            type='email'
            name='email'
            onChange={accountHandler}
            placeholder='Email'
          />

          <input
            type='password'
            name='password'
            onChange={accountHandler}
            placeholder='Password'
          />
        </div>
        {profileErrorState ? (
          <p className={classes.error}>{profileErrorState}</p>
        ) : null}
        <button onClick={registerFormHandler}> Log in Now </button>
      </div>
      {success ? <Redirect to='/' /> : null}
    </div>
  )
}
