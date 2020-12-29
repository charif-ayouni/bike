import React from 'react'
import { Container, Close } from './sidenav.style'
import { FaTimes } from 'react-icons/fa'
import { useSidenav } from '../../context/sidenavContext'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  const { open, toggleSidenav } = useSidenav()

  return (
    <Container isOpen={open}>
      <Close href='#' onClick={() => toggleSidenav()}>
        <FaTimes />
      </Close>
      <Link to='/'>Trouver un Vélo</Link>
      <Link to='/locations'>Mes locations</Link>
      <Link to='/return'>Annulation</Link>
      <Link to='/profile'>Mon Profil</Link>
      <Link to='/'>Contact</Link>
    </Container>
  )
}

export default Sidenav
