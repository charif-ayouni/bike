import React from 'react'
import { Span } from './menu.style.js'
import { FaStream } from 'react-icons/fa'
import { useSidenav } from '../../context/sidenavContext'

const Menu = () => {
  const { toggleSidenav } = useSidenav()

  return (
    <Span onClick={() => toggleSidenav()}>
      <FaStream />
    </Span>
  )
}

export default Menu
