import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Container, Wrapper, Button, ButtonHome } from './navigation.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import {
  faStream,
  faUndoAlt,
  faUser,
  faBiking
} from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const location = useLocation()
  if (location && !['/login', '/register'].includes(location.pathname)) {
    return (
      <Container>
        <Wrapper>
          <Button current={location.pathname === '/locations'}>
            <Link to='/locations'>
              <FontAwesomeIcon icon={faStream} />
            </Link>
          </Button>

          <Button current={location.pathname === '/return'}>
            <Link to='/return'>
              <FontAwesomeIcon icon={faUndoAlt} />
            </Link>
          </Button>
          <ButtonHome current={location.pathname === '/'}>
            <Link to='/'>
              <FontAwesomeIcon icon={faBiking} />
            </Link>
          </ButtonHome>
          <Button current={location.pathname === '/profile'}>
            <Link to='/profile'>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </Button>
          <Button current={location.pathname === '/about'}>
            <Link to='/about'>
              <FontAwesomeIcon icon={faCommentDots} />
            </Link>
          </Button>
        </Wrapper>
      </Container>
    )
  } else {
    return null
  }
}

export default Navigation
