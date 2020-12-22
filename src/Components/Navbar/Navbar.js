import React, { useEffect, useState, useContext } from 'react'
import classes from './Navbar.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
export const Navbar = () => {
  const { user, setuser } = useContext(UserContext)
  const [cartQuantity, setcartQuantity] = useState(0)
  const [modal, setmodal] = useState(false)
  const [removeClassOnLoad, setremoveClassOnLoad] = useState(false)
  const [loggedIn, setloggedIn] = useState(false)
  const [totalCost, settotalCost] = useState(0)
  const parent = React.createRef()
  const location = useLocation()

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      setloggedIn(true)
      let allItems = 0
      let total = 0
      user.cart.map((item) => {
        allItems = allItems + item.quantity

        let priceToNum = Number(item.price.split(' ')[0].replace(',', '.'))
        total = total + priceToNum * item.quantity
        return 0
      })

      setcartQuantity(allItems)
      settotalCost(total)
      setloggedIn(true)
    } else {
      setloggedIn(false)
    }
  }, [user])
  window.addEventListener('click', (event) => {
    event.stopPropagation()
    if (event.target === parent.current) {
      setmodal(false)
    }
  })
  const modalOpen = () => {
    setmodal(true)
    setremoveClassOnLoad(true)
    console.log('asd')
  }
  const modalClose = (event) => {
    setmodal(false)
  }
  const removeItemQuantity = (item, index) => {
    const userCopy = { ...user }

    if (item.quantity > 1) {
      item.quantity = item.quantity - 1
      userCopy.cart[index] = item
      fetch('http://localhost:4000/users/' + user.id, {
        method: 'PUT',
        body: JSON.stringify(userCopy),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((header) => {
          if (!header.ok) {
            throw Error(header)
          }
          return header.json()
        })
        .then((response) => {
          if (response) {
            setuser(userCopy)
          } else {
            alert('asd')
          }
        })
        .catch((e) => {
          console.log(e)
        })
    } else {
      console.log('cant')
    }
  }
  const addItemQuantity = (item, index) => {
    const userCopy = { ...user }

    item.quantity = item.quantity + 1
    userCopy.cart[index] = item
    fetch('http://localhost:4000/users/' + user.id, {
      method: 'PUT',
      body: JSON.stringify(userCopy),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((header) => {
        if (!header.ok) {
          throw Error(header)
        }
        return header.json()
      })
      .then((response) => {
        if (response) {
          setuser(userCopy)
        } else {
          alert('asd')
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        CX <div>CapacityX</div>
      </div>
      {/* <div className={classes.mobileNav}>
        <FontAwesomeIcon icon={faBars} />
      </div> */}

      <ul className={classes.navigation}>
        <Link
          to='/'
          className={location.pathname === '/' ? classes.active : null}
        >
          <li> Home </li>
        </Link>

        <Link
          to='/about'
          className={location.pathname === '/about' ? classes.active : null}
        >
          <li> About </li>
        </Link>

        <Link
          to='/shop'
          className={location.pathname === '/shop' ? classes.active : null}
        >
          <li> Shop </li>
        </Link>

        <Link
          to='/contact'
          className={location.pathname === '/contact' ? classes.active : null}
        >
          <li> Contact </li>
        </Link>

        {loggedIn ? (
          <>
            <li onClick={modalOpen}>{cartQuantity}</li>
            <li> Logout </li>
          </>
        ) : (
          <>
            <Link to='/login'>
              {' '}
              <li>Login </li>
            </Link>
            <Link to='/register'>
              {' '}
              <li> Register </li>{' '}
            </Link>
          </>
        )}
      </ul>

      {/* {modal ? ( */}
      <div
        className={
          modal
            ? classes.cartContainer
            : `${classes.cartContainer2} ${
                removeClassOnLoad ? null : classes.pageLoad
              }`
        }
        ref={parent}
      >
        <div
          className={
            modal === true
              ? `${classes.cart} ${classes.slideIn}`
              : `${classes.cart2} ${classes.slideOut}`
          }
        >
          <div className={classes.cartTitle}>
            <span className={classes.cartToggle} onClick={modalClose}>
              {'>'}
            </span>
            <h1> Cart </h1>
          </div>
          {Object.keys(user).length > 0 && user.cart.length > 0 ? (
            <div className={classes.cartList}>
              <ul>
                {Object.keys(user).length > 0 &&
                  user.cart.map((item, index) => (
                    <li key={index} className={classes.itemCard}>
                      <img
                        src={require(`../../imgs/shop/${item.picture}`)}
                        alt=''
                        className={classes.productPic}
                      />
                      <div className={classes.infoContainer}>
                        <h5 className={classes.itemTitle}>{item.title} </h5>
                        <h5 className={classes.itemPrice}>{item.price}</h5>
                        <div className={classes.quantity}>
                          <span onClick={() => removeItemQuantity(item, index)}>
                            -
                          </span>
                          <span>{item.quantity} </span>

                          <span onClick={() => addItemQuantity(item, index)}>
                            +
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
              <div className={classes.subTotal}>Subtotal</div>
              <div className={classes.totalCost}>{totalCost} €</div>
              <Link className={classes.linkToCart}> Checkout </Link>
            </div>
          ) : (
            <div className={classes.cartList}>
              <h1> Cart is empty </h1>{' '}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
