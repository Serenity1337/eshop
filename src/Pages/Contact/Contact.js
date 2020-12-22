import React from 'react'
import { useState } from 'react'
import classes from './Contact.module.scss'
export const Contact = () => {
  const [profile, setprofile] = useState({ data: {}, errors: {} })

  const accountHandler = (event) => {
    const profileCopy = { ...profile }
    profileCopy.data = {
      ...profileCopy.data,
      [event.target.name]: event.target.value,
    }
    setprofile(profileCopy)
  }
  const registerFormHandler = () => {}
  console.log(profile)
  return (
    <div className={classes.contactContainer}>
      <h1 className={classes.contactTitle}>contact us</h1>
      <div className={classes.container}>
        <p className={classes.contactPara}>
          Use the form below to contact us for any special
          <br /> requests, inquiries, questions or concerns
        </p>

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
            type='tel'
            name='phoneNumber'
            onChange={accountHandler}
            placeholder='Phone Number'
          />
        </div>
        <input
          type='text'
          name='message'
          className={classes.messageInput}
          placeholder='Type your message here...'
        />
        {Object.keys(profile.errors).length > 0 ? (
          <p className={classes.error}>{profile.errors.firstName}</p>
        ) : null}
        <button onClick={registerFormHandler}> Submit </button>
      </div>
    </div>
  )
}
