import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { setBikes, setCurrentStart } from '../../redux/actions/bikeActions'
import Loader from '../../components/loader'

import Card from '../card'
import { Container } from './bikes.style'

const Bikes = () => {
  const max = 10
  const [hasMore, setHasMore] = useState(true)
  const dispatch = useDispatch()
  const { displayType, start, limit, bikes } = useSelector(
    state => state.bikeReducers
  )

  const findAll = async (s, l) => {
    let data = [
      {
        image: 'http://lorempixel.com/1200/630/nature/1',
        title: 'Right Out of the Gate',
        rate: '3.2',
        city: 'Francisca'
      },
      {
        image: 'http://lorempixel.com/1200/630/nature/2',
        title: 'Son of a Gun',
        rate: '1.9',
        city: 'Oconnor'
      },
      {
        image: 'http://lorempixel.com/1200/630/nature/3',
        title: 'Birds of a Feather Flock Together',
        rate: '2.0',
        city: 'Luella'
      },
      {
        image: 'http://lorempixel.com/1200/630/nature/4',
        title: 'Not the Sharpest Tool in the Shed',
        rate: '2.2',
        city: 'Shelia'
      },
      {
        image: 'http://lorempixel.com/1200/630/nature/5',
        title: 'Plot Thickens - The',
        rate: '1.9',
        city: 'Vaughn'
      },
      {
        image: 'http://lorempixel.com/1200/630/nature/6',
        title: 'Son of a Gun',
        rate: '4.9',
        city: 'Randall'
      },
      {
        image: 'http://lorempixel.com/1200/630/nature/7',
        title: 'Tough It Outn',
        rate: '12',
        city: 'Petersen'
      },
      {
        image: 'http://lorempixel.com/1200/630/nature/8',
        title: 'Cry Over Spilt Milkn',
        rate: '2',
        city: 'Mauro'
      },
      {
        image: 'http://lorempixel.com/1200/630/nature/',
        title: 'Lickety Split',
        rate: '3',
        city: 'Merritt'
      },
      {
        image: 'http://lorempixel.com/1200/630/nature/10',
        title: 'Under the Weather',
        rate: '7',
        city: 'Barton'
      }
    ]
    setTimeout(() => {}, 900)
    return data.slice(s, s + l)
  }

  useEffect(() => {
    findAll(start, limit)
      .then(res => {
        let data = [...bikes, ...res]
        dispatch(setBikes(data))
      })
      .catch(err => {
        console.log(err)
      })
  }, [displayType, start])

  const fetchBikes = () => {
    if (bikes.length >= max) {
      setHasMore(false)
      return
    }
    setTimeout(() => {
      dispatch(setCurrentStart(start + limit))
    }, 500)
  }
  return (
    <div>
      <InfiniteScroll
        dataLength={bikes.length}
        next={fetchBikes}
        hasMore={hasMore}
        loader={<Loader />}
        height={'calc(100vh - 56px)'}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>fin</b>
          </p>
        }
      >
        <Container>
          {bikes.map((item, key) => (
            <Card key={key} item={item} />
          ))}
        </Container>
      </InfiniteScroll>
    </div>
  )
}

export default Bikes
