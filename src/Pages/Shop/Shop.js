import React, {useState,useEffect} from 'react'
import classes from './Shop.module.scss'

export const Shop = () => {
  
  const [products, setproducts] = useState([])

  useEffect(() => {
    
    fetch('http://localhost:4000/products',{

    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }


    }).then(header => {
      if (!header.ok) {
        throw Error(header) 
        
      }
      return header.json()
    }).then(response => {
      console.log(response)
      setproducts(response)
    }).catch(e => {
      console.log(e)
    })

  }, [])
  console.log(products)
  return (
    <div>
      <h1>capacityx products</h1>
      <div className={classes.container}>
        <div className={classes.filter}>
            <h1> Filter By </h1>
            <div className={classes.line}></div>
            <ul className={classes.productType}>
              <li> All </li>
              <li> Pre Workout </li>
              <li> Capsules </li>
              <li> Protein Powder </li>
            </ul>
            <div className={classes.priceFilter}>
                  <input type="range" name="price" id={classes.price} className={classes.price} min='15' max = '50'/>
            </div>
        </div>

        <div className={classes.products}>

        </div>


      </div>
      
    </div>
  )
}
