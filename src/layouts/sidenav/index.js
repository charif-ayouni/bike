import React from 'react'
import {
  Container,
  Close,
  ThemeContainer,
  Links,
  Row,
  Span
} from './sidenav.style'
import { FaTimes } from 'react-icons/fa'
import { useSidenav } from '../../context/sidenavContext'
import { Link } from 'react-router-dom'
import ThemeToggle from '../../components/themeToggle'
import { useTranslation } from 'react-i18next'

const Sidenav = () => {
  const { open, toggleSidenav } = useSidenav()
  const { t } = useTranslation()

  return (
    <Container isOpen={open}>
      <Close href='#' onClick={() => toggleSidenav()}>
        <FaTimes />
      </Close>
      <Row>
        <Links>
          <Link to='/'>{t('findBike')}</Link>
          <Link to='/locations'>{t('myRentals')}</Link>
          <Link to='/return'>{t('cancellation')}</Link>
          <Link to='/profile'>{t('myProfile')}</Link>
        </Links>
        <ThemeContainer>
          <Span>{t('switchTheme')}</Span>
          <ThemeToggle />
        </ThemeContainer>
      </Row>
    </Container>
  )
}

export default Sidenav
