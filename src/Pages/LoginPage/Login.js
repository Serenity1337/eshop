import React, { useEffect, useState } from 'react'
// import { Redirect } from 'react-router'
import classes from './Login.module.scss'
import { getAllUsers } from '../../Api'
export const Login = () => {
  const [profile, setprofile] = useState({})
  const [profileErrorState, setprofileErrorState] = useState('')
  const [users, setusers] = useState([])
  // const [success, setsuccess] = useState(false)
  useEffect(() => {
    getAllUsers().then((response) => {
      if (response) {
        setusers(response)
      }
    })
  }, [])

  const accountHandler = (event) => {
    setprofile({ ...profile, [event.target.name]: event.target.value })
  }
  const loginFormHandler = () => {
    console.log(users)
    let userProfile = {}
    let userExists = false
    users.map((user) => {
      if (user.email === profile.email) {
        userProfile = user
        userExists = true
        return 0
      }
    })
    if (userExists === true) {
      if (profile.password === userProfile.password) {
        let userProfileCopy = { ...userProfile }
        delete userProfileCopy.password
        localStorage.setItem('user', JSON.stringify({ id: userProfileCopy.id }))
        // setsuccess(true)
        window.location.href = '/'
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
        <button onClick={loginFormHandler}> Log in Now </button>
      </div>
      {/* {success ? <Redirect to='/' /> : null} */}
    </div>
  )
}
