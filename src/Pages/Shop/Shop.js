import React, { useState, useEffect, useContext } from 'react'
import classes from './Shop.module.scss'
import { UserContext } from '../../UserContext'
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
    fetch('http://localhost:4000/products', {
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
        setproducts(response)
        setfilteredProducts(response)
      })
      .catch((e) => {
        console.log(e)
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
    console.log(productTypeFilter)
  }

  const productTypeFilterHandler = (event) => {
    console.log(event.currentTarget.textContent)
    const productTypeArr = ['All', 'PreWorkout', 'Capsules', 'ProteinPowder']
    const productTypeObjCopy = { ...productTypeDisplayFilter }
    productTypeArr.map((type, index) => {
      // console.log(String(event.currentTarget.textContent) === String(type))
      // console.log(String(event.currentTarget.textContent).split('').join(''))
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
        setuser(userCopy)
        if (response) {
        } else {
          alert('asd')
        }
      })
      .catch((e) => {
        console.log(e)
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

              <button onClick={() => cartHandler(product, index)}>
                Add to Cart
                <span>{product.quantity}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
