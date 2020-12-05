import React from 'react'
import { Carousel as Slide } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Carousel = props => {
  let { pictures } = { ...props }
  return (
    <div>
      <Slide infiniteLoop dynamicHeight={true}>
        {pictures
          ? pictures.map((picture, index) => {
              return (
                <div key={index}>
                  <img alt='' src={picture} />
                </div>
              )
            })
          : null}
      </Slide>
    </div>
  )
}
export default Carousel
