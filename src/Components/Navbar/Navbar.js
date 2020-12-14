import React, { useEffect, useState } from 'react'
import classes from './Navbar.module.scss'
import { Link, useLocation, useHistory } from 'react-router-dom'

export const Navbar = () => {
  const [user, setuser] = useState({})
  const [itemQuantity, setitemQuantity] = useState({})
  const [modal, setmodal] = useState(false)
  const [removeClassOnLoad, setremoveClassOnLoad] = useState(false)
  const [filteredItems, setfilteredItems] = useState([])
  const parent = React.createRef()
  const location = useLocation()
  // const containerClasses () => {
  //   if (modal ===)
  // }
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
          setfilteredItems(helperDupeFilter(currentUserObj[0].cart))
        } else {
          console.log('asd')
        }
      })
      .catch((e) => {
        console.log(e)
      })
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
  const helperDupeFilter = (arr) => {
    const obj = {}
    const newArr = []
    arr.map((item, index) => {
      if (!obj[item.title]) {
        newArr.push(item)
        obj[item.title] = true
        // do nothing
      }
    })
    return newArr
  }

  useEffect(() => {
    if (Object.keys(user).length > 0) {
    }
    console.log('test')
  }, [filteredItems])
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        CX <div>CapacityX</div>
      </div>
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

        <li onClick={modalOpen}>
          {' '}
          {Object.keys(user).length > 0 ? user.cart.length : null}{' '}
        </li>
        <li> Logout </li>
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
          {
            <div className={classes.cartList}>
              {filteredItems.length > 0 ? (
                <ul>
                  {filteredItems.map((item, index) => (
                    <li key={index} className={classes.itemCard}>
                      <div className={classes.productPic}></div>
                      <div className={classes.infoContainer}>
                        <h5>{item.title} </h5>
                        <h5>{item.price}</h5>
                        <div className={classes.quantity}>
                          {
                            user.cart.filter(
                              (product, index) => product.title === item.title
                            ).length
                          }
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                'Cart is empty'
              )}
            </div>
          }
        </div>
      </div>
      {/* ) : null} */}
    </div>
  )
}
