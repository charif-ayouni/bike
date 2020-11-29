import React from 'react'
import { Carousel as Slide } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Carousel = () => {
  return (
    <div>
      <Slide infiniteLoop dynamicHeight={false}>
        <div>
          <img
            alt=''
            src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='http://lorempixel.com/output/cats-q-c-640-480-2.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='http://lorempixel.com/output/cats-q-c-640-480-3.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='http://lorempixel.com/output/cats-q-c-640-480-4.jpg'
          />
        </div>
      </Slide>
    </div>
  )
}
export default Carousel
