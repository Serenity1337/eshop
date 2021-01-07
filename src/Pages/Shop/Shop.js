import React, { useState, useEffect, useContext } from 'react'
import classes from './Shop.module.scss'
import { UserContext } from '../../UserContext'
import { getAllProducts, editSingleUser } from '../../Api'
import { Link } from 'react-router-dom'
export const Shop = () => {
  const { user, setuser } = useContext(UserContext)
  const [products, setproducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [productTypeFilter, setproductTypeFilter] = useState(false)
  const [priceFilter, setpriceFilter] = useState(false)
  const [productTypeDisplayFilter, setproductTypeDisplayFilter] = useState({
    All: true,
    PreWorkout: false,
    Capsules: false,
    ProteinPowder: false,
  })

  useEffect(() => {
    getAllProducts().then((response) => {
      if (response) {
        setproducts(response)
        setfilteredProducts(response)
      } else {
        console.log('whoops shoulda handled this error')
      }
    })
  }, [])
  useEffect(() => {
    const productTypeArr = ['All', 'PreWorkout', 'Capsules', 'ProteinPowder']
    productTypeArr.map((type, index) => {
      if (productTypeDisplayFilter[type] === true) {
        if (type !== 'All') {
          const copyProducts = [...products]
          const filteredProductsCopy = copyProducts.filter(
            (product) => String(product.type.replace(/ /g, '')) === String(type)
          )
          setfilteredProducts(filteredProductsCopy)
        } else {
          setfilteredProducts(products)
        }
      }
      return 0
    })
  }, [productTypeDisplayFilter])
  useEffect(() => {}, [])
  const priceFilterHandler = () => {
    setpriceFilter(!priceFilter)
  }

  const productTypeHandler = () => {
    setproductTypeFilter(!productTypeFilter)
  }

  const productTypeFilterHandler = (event) => {
    console.log(event.currentTarget.textContent)
    const productTypeArr = ['All', 'PreWorkout', 'Capsules', 'ProteinPowder']
    const productTypeObjCopy = { ...productTypeDisplayFilter }
    productTypeArr.map((type, index) => {
      const typeCopy = String(event.currentTarget.textContent).replace(/ /g, '')
      if (typeCopy === String(type)) {
        productTypeObjCopy[type] = true
      } else {
        productTypeObjCopy[type] = false
      }

      return 0
    })
    setproductTypeDisplayFilter(productTypeObjCopy)
  }
  const cartHandler = (product, index) => {
    const userCopy = { ...user }

    const exists = user.cart.filter((item) => item.title === product.title)

    if (exists.length > 0) {
      userCopy.cart[index].quantity = userCopy.cart[index].quantity + 1
    } else {
      userCopy.cart = [...userCopy.cart, product]
    }
    editSingleUser(user.id, userCopy).then((response) => {
      setuser(userCopy)
    })
  }
  return (
    <div className={classes.productsContainer}>
      <h1 className={classes.productsTitle}>capacityx products</h1>
      <div className={classes.container}>
        <div className={classes.filter}>
          <h1> Filter By </h1>
          <div className={classes.productTypeFilter}>
            <div className={classes.flex} onClick={productTypeHandler}>
              Product Type
              <span>{productTypeFilter ? '-' : '+'}</span>
            </div>
            {productTypeFilter ? (
              <ul className={classes.productType}>
                <li
                  onClick={productTypeFilterHandler}
                  className={
                    productTypeDisplayFilter.All ? classes.active : null
                  }
                >
                  {' '}
                  All{' '}
                </li>
                <li
                  onClick={productTypeFilterHandler}
                  className={
                    productTypeDisplayFilter.PreWorkout ? classes.active : null
                  }
                >
                  {' '}
                  Pre Workout{' '}
                </li>
                <li
                  onClick={productTypeFilterHandler}
                  className={
                    productTypeDisplayFilter.Capsules ? classes.active : null
                  }
                >
                  {' '}
                  Capsules{' '}
                </li>
                <li
                  onClick={productTypeFilterHandler}
                  className={
                    productTypeDisplayFilter.ProteinPowder
                      ? classes.active
                      : null
                  }
                >
                  {' '}
                  Protein Powder{' '}
                </li>
              </ul>
            ) : null}
          </div>

          <div className={classes.priceFilterBtn}>
            <div className={classes.flex} onClick={priceFilterHandler}>
              Price
              <span>{priceFilter ? '-' : '+'}</span>
            </div>

            {priceFilter ? (
              <div className={classes.priceFilter}>
                <input
                  type='range'
                  name='price'
                  id={classes.price}
                  className={classes.price}
                  min='15'
                  max='50'
                />
              </div>
            ) : null}
          </div>
        </div>

        <div className={classes.products}>
          {filteredProducts.map((product, index) => (
            <div className={classes.productCard} key={index}>
              <img
                src={require(`../../imgs/shop/${product.picture}`)}
                alt='asd'
              />
              <div className={classes.productTitle}>{product.title}</div>
              <div className={classes.productPrice}>{product.price}</div>

              {Object.keys(user).length > 0 ? (
                <button onClick={() => cartHandler(product, index)}>
                  Add to Cart
                </button>
              ) : (
                <button>
                  <Link to={`/login`}>Add to Cart</Link>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
