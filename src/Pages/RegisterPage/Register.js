import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router'
import { register, getAllUsers } from '../../Api'
import classes from './Register.module.scss'
export const Register = () => {
  const [profile, setprofile] = useState({})
  const [profileErrorState, setprofileErrorState] = useState('')
  const [users, setusers] = useState([])
  const [success, setsuccess] = useState(false)
  useEffect(() => {
    getAllUsers().then((response) => {
      if (response) setusers(response)
    })
  }, [])

  const accountHandler = (event) => {
    setprofile({ ...profile, [event.target.name]: event.target.value })
  }
  const registerFormHandler = () => {
    let emails = []
    users.map((user) => {
      emails.push(user.email)
      return 0
    })
    const emailExists = emails.includes(profile.email)
    console.log(emailExists)
    if (
      !profile.firstName ||
      !profile.lastName ||
      !profile.email ||
      !profile.phoneNumber ||
      !profile.password ||
      !profile.rpassword
    ) {
      setprofileErrorState('Please fill empty fields')
    } else {
      if (!emailExists) {
        if (profile.password === profile.rpassword) {
          let copyProfile = { ...profile }
          delete copyProfile.rpassword
          copyProfile.cart = []
          register(copyProfile).then((response) => {
            if (response) {
              setusers([...users, copyProfile])
              console.log(response)
              setsuccess(true)
            } else {
              alert('asd')
            }
          })
        } else {
          let error = 'Repeated password is incorrect.'

          setprofileErrorState(error)
        }
      } else {
        let error = 'Such email is already in use.'
        setprofileErrorState(error)
      }
    }
    console.log(profileErrorState)
  }
  return (
    <div className={classes.registerContainer}>
      <div>
        <h1>Sign up to be able to order anything from our shop</h1>

        <div className={classes.pairing}>
          <input
            type='text'
            name='firstName'
            onChange={accountHandler}
            placeholder='First Name'
          />

          <input
            type='text'
            name='lastName'
            onChange={accountHandler}
            placeholder='Last Name'
          />
        </div>

        <div className={classes.pairing}>
          <input
            type='email'
            name='email'
            onChange={accountHandler}
            placeholder='Email'
          />

          <input
            type='text'
            name='phoneNumber'
            onChange={accountHandler}
            placeholder='Phone Number'
          />
        </div>

        <div className={classes.pairing}>
          <input
            type='password'
            name='password'
            onChange={accountHandler}
            placeholder='Password'
          />

          <input
            type='password'
            name='rpassword'
            onChange={accountHandler}
            placeholder='Repeat Password'
          />
        </div>
        {profileErrorState ? (
          <p className={classes.error}>{profileErrorState}</p>
        ) : null}
        <button onClick={registerFormHandler}> Register Now </button>
      </div>

      {success ? <Redirect to='/login' /> : null}
    </div>
  )
}
