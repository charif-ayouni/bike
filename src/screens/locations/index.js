import React, { useState, useEffect } from 'react'
import { Container, Nav, NavLink } from './locations.index'
import Location from './components/location'
import { useTranslation } from 'react-i18next'
import { getLocations } from '../../services/firebase'
import { useAuth } from '../../context/authContext'

const Locations = () => {
  const { user } = useAuth()
  const { t } = useTranslation()
  const [tab, setTab] = useState(1)

  let [data, setData] = useState([])
  useEffect(() => {
    getLocations(user.uid)
      .then(res => {
        let tmp = []
        res.forEach(doc => {
          tmp.push(doc.data())
        })
        setData(tmp)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Container>
      <Nav>
        <NavLink onClick={() => setTab(1)} current={tab === 1}>
          {t('pending')}
        </NavLink>
        <NavLink onClick={() => setTab(2)} current={tab === 2}>
          {t('confirmed')}
        </NavLink>
      </Nav>
      {tab === 1
        ? data
            .filter(location => location.status === 'pending')
            .map((location, index) => {
              return <Location location={location} key={index} />
            })
        : data
            .filter(location => location.status === 'confirmed')
            .map((location, index) => {
              return <Location location={location} key={index} />
            })}
    </Container>
  )
}

export default Locations
