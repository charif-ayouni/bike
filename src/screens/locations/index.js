import React, { useState } from 'react'
import { Container, Nav, NavLink } from './locations.index'
import Location from './components/location'

const Locations = () => {
  const [tab, setTab] = useState(1)
  const data = [
    {
      title: 'MIGO Style 28 pouces 56 cm Homme 6SP V-Brake Noir mat',
      date: '24-09-2020',
      image: 'https://ayouni-charif.fr/files/bikeApplication/velo2.jpg',
      locationNumber: '093457466869',
      price: '500',
      status: 'pending'
    },
    {
      title: 'VELO DE VILLE ELOPS 520 CADRE BAS BLEU JEANS',
      date: '24-09-2020',
      image: 'https://ayouni-charif.fr/files/bikeApplication/velo3.jpg',
      locationNumber: '093457466869',
      price: '234',
      status: 'confirmed'
    },
    {
      title: 'VELO DE VILLE ELOPS 520 CADRE BAS BLEU JEANS',
      date: '21-09-2020',
      image: 'https://ayouni-charif.fr/files/bikeApplication/velo3.jpg',
      locationNumber: '093422466869',
      price: '134',
      status: 'pending'
    }
  ]
  return (
    <Container>
      <Nav>
        <NavLink onClick={() => setTab(1)} current={tab === 1}>
          En cours
        </NavLink>
        <NavLink onClick={() => setTab(2)} current={tab === 2}>
          Confirmées
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
