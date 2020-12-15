import React, { useEffect, useState, useContext } from 'react'
import classes from './Home.module.scss'
import landingImg from '../../imgs/home/img2.png'
import card1 from '../../imgs/home/913019_6d1d377f525b4b568168926a657dd13b_mv2_d_3227_3116_s_4_2.webp'
import card2 from '../../imgs/home/913019_e041a68b0e62406184655aea26d07e1b_mv2_d_3227_3116_s_4_2.webp'
import card3 from '../../imgs/home/913019_6771fc17856545648d6025c0f41569bb_mv2_d_3227_3116_s_4_2.webp'
import motiImg from '../../imgs/home/motiImg.webp'
import { UserContext } from '../../UserContext'
export const Home = () => {
  const { user, setuser } = useContext(UserContext)

  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <div className={classes.homeContainer}>
      <div className={classes.landingSection}>
        <div className={classes.advertisement}>
          <div className={classes.information}>
            <h1>reach your maximum capacity</h1>
            <p>
              <span>Go further than you thought with</span>{' '}
              <span>CapacityX supplements</span>
            </p>
            <button>shop now</button>
          </div>
          <img src={landingImg} alt='#' />
        </div>
      </div>

      <div className={classes.featuredProductsSection}>
        <h1>featured products</h1>
        <div className={classes.cardContainer}>
          <div className={classes.card}>
            <img src={card1} alt='' />
          </div>
          <div className={classes.card}>
            <img src={card2} alt='' />
          </div>
          <div className={classes.card}>
            <img src={card3} alt='' />
          </div>
        </div>
      </div>

      <div className={classes.motivationSection}>
        <div className={classes.motivation}>
          <div className={classes.information}>
            <h1>
              we create products
              <br />
              to help you reach the
              <br />
              fitness goals you
              <br />
              never knew you had
            </h1>
            <p>
              I'm a paragraph. Click here to add your own
              <br /> text and edit me. It's easy. Just click "Edit
              <br /> Text" or double click me to add your own
              <br /> context and make changes to the font.
            </p>
            <button>learn more</button>
          </div>
          <img src={motiImg} alt='#' />
        </div>
      </div>

      <div className={classes.parallaxSection}>
        <h1>What's your purpose?</h1>
        <div className={classes.cards}>
          <div className={classes.card}>
            <div className={classes.parallaxCard}></div>
          </div>
          <div className={classes.card}>
            <h1>muscle &amp; strength</h1>
            <button>select</button>
            <h1>performance &amp; focus</h1>
            <button>select</button>
          </div>
        </div>
      </div>

      <div className={classes.blogSection}>
        <h1>capacityx fitness blog</h1>
        <div className={classes.blogPosts}>
          <div className={classes.blogPostOne}>
            <div className={classes.blogPosterName}>Karolis Šulcas</div>
            <div className={classes.blogPostDate}>Oct 11 2 min ago</div>
            <div className={classes.blogPostTitle}>
              3 ways to build bigger arms faster
            </div>
          </div>
          <div className={classes.blogPostTwo}>
            <div className={classes.blogPosterName}>Karolis Šulcas</div>
            <div className={classes.blogPostDate}>Oct 11 1 min ago</div>
            <div className={classes.blogPostTitle}>
              how to push past your peak performance
            </div>
          </div>

          <div className={classes.blogPostThree}>
            <div className={classes.blogPosterName}>Karolis Šulcas</div>
            <div className={classes.blogPostDate}>Oct 11 2 min ago</div>
            <div className={classes.blogPostTitle}>
              the best time to drink your protein and why
            </div>
          </div>
        </div>
        <button> read more </button>
        <div className={classes.subscribeContainer}>
          <h1> SIGN UP FOR EXCLUSIVE UPDATES AND OFFERS FROM THE CX TEAM </h1>
          <div className={classes.flex}>
            <input type='text' placeholder='Enter your email here' />
            <button className={classes.subscribeBtn}>submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
