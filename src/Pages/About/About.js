import React, { useState } from 'react'
import classes from './About.module.scss'
import innovator from '../../imgs/about/innovator.webp'
export const About = () => {
  const [carouselIndex, setcarouselIndex] = useState(1)
  const firstTestimonial = () => {
    setcarouselIndex(1)
  }
  const secondTestimonial = () => {
    setcarouselIndex(2)
  }
  const thirdTestimonial = () => {
    setcarouselIndex(3)
  }
  return (
    <div>
      <div className={classes.aboutSection}>
        <h1>about us</h1>
        <div className={classes.paragraphs}>
          <p className={classes.paraOne}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            facilis consequuntur voluptate a vero possimus culpa praesentium aut
            soluta corporis ipsa, omnis velit. Et soluta temporibus, blanditiis
            quae quos ex aut debitis, amet nemo officia hic dolorum recusandae
            qui repellat quas eius quis doloremque pariatur unde sunt laboriosam
            modi autem tempore neque. Accusantium minima eum incidunt quas
            beatae expedita aliquid.
          </p>
          <p className={classes.paraTwo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            quibusdam! Nihil ipsa, doloribus ad laborum illo, mollitia
            reiciendis facere fugiat voluptatum, necessitatibus optio magni
            accusantium voluptates voluptate aliquam sint! Facere dolorem
            distinctio natus ipsa, quos odio odit fugiat itaque doloremque
            quaerat quo repudiandae, exercitationem cum molestias quis dicta
            maiores consequatur commodi illo sapiente repellendus perspiciatis
            at. Accusantium, corporis saepe? Explicabo laboriosam porro eaque
            minima laudantium molestiae adipisci beatae natus dicta?
          </p>
          <p className={classes.paraThree}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iusto
            aliquam fugiat facilis recusandae, cumque accusamus consequatur?
            Deserunt dolorem ipsam magnam atque provident, architecto est
            repellat officia laudantium asperiores illum libero eligendi! Ullam
            placeat magnam dolor doloribus ea adipisci hic, nisi, ipsa
            exercitationem sit modi aliquam. Repudiandae natus impedit saepe
            unde praesentium nemo minima tempore, magnam quod explicabo
            laudantium deleniti tempora reprehenderit corrupti accusantium modi,
            molestias quasi dolor accusamus rerum, consequatur dolorem non!
            Consequuntur corrupti labore minima tempore odio iusto, ea similique
            modi, id est, vel nihil? Placeat nobis consequuntur fuga explicabo,
            perferendis temporibus sit vitae reiciendis, dignissimos dolorum
            eligendi blanditiis error rem perspiciatis quo tempore, quam illum
            ratione libero facilis. Voluptates distinctio fugiat quas totam
            cumque cupiditate reprehenderit quod?
          </p>
        </div>
      </div>

      <div className={classes.innovatorSection}>
        <h1> the innovator </h1>
        <p className={classes.innovatorParaOne}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta
          minus recusandae, velit voluptate quae eaque, ad nisi porro enim
          officiis, deserunt optio rem est ducimus nihil? Neque doloremque
          inventore incidunt soluta ab vitae illo quia omnis! Voluptatum magni
          ad consequatur optio fuga. Similique, accusantium recusandae
          consequuntur sit eligendi ratione.
        </p>
        <p className={classes.innovatorParaTwo}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          mollitia ducimus repellat? Iusto eum assumenda cumque, veniam tempore
          aut molestias odio, aperiam fugit iste blanditiis voluptate quod unde
          ea eos accusantium facilis consequuntur saepe reprehenderit. Optio
          aspernatur qui iusto illo at odio voluptatibus modi, fugiat alias,
          quod autem ea nisi. Voluptas officiis impedit explicabo architecto
          accusantium harum aliquid, quod necessitatibus.
        </p>
        <img src={innovator} alt='' />
      </div>

      <div className={classes.testimonialSection}>
        <h1> what people are saying </h1>
        <div className={classes.testimonialContainer}>
          <div
            className={`${classes.testimonialOne} ${
              carouselIndex === 1 ? classes.active : classes.hidden
            }`}
          >
            <div className={classes.info}>
              <h5>john doe</h5>
              <h6>professional bodybuilder</h6>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, odio
              commodi suscipit reprehenderit repudiandae aspernatur expedita at
              voluptatem culpa quod.
            </p>
          </div>

          <div
            className={`${classes.testimonialTwo} ${
              carouselIndex === 2 ? classes.active : classes.hidden
            }`}
          >
            <div className={classes.info}>
              <h5>noir doe</h5>
              <h6>professional weightlifter</h6>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, odio
              commodi suscipit reprehenderit repudiandae aspernatur expedita at
              voluptatem culpa quod.
            </p>
          </div>

          <div
            className={`${classes.testimonialThree} ${
              carouselIndex === 3 ? classes.active : classes.hidden
            }`}
          >
            <div className={classes.info}>
              <h5>jane doe</h5>
              <h6>professional cyclist</h6>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, odio
              commodi suscipit reprehenderit repudiandae aspernatur expedita at
              voluptatem culpa quod.
            </p>
          </div>
          <div className={classes.choices}>
            <div
              className={`${classes.first} ${classes.active}`}
              onClick={firstTestimonial}
            ></div>
            <div className={classes.second} onClick={secondTestimonial}></div>
            <div className={classes.third} onClick={thirdTestimonial}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
