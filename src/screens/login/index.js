import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  Wrapper,
  Form,
  Button,
  Input,
  Group,
  Title,
  Link,
  Error
} from './login.index'
import Avatar from './components/avatar'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../context/authContext'
import { sendNotification } from '../../services/firebase'

const Login = () => {
  const email = useRef()
  const password = useRef()
  const { t } = useTranslation()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()

    if (password.current.value.length <= 0) {
      return setError('error_password')
    }

    try {
      setError('')
      setLoading(true)
      await login(email.current.value, password.current.value)
      let to = localStorage.getItem('fcm-token')
        ? localStorage.getItem('fcm-token')
        : null

      if (to) {
        let notification = {
          to: to,
          priority: 'high',
          notification: {
            body: t('welcomeBack'),
            title: t('newConnection')
          }
        }
        sendNotification(notification)
          .then()
          .catch(err => {
            console.log(err)
          })
      }
      history.push('/')
    } catch (e) {
      setError('error_login')
    }
    setLoading(false)
  }

  return (
    <Container>
      <Wrapper>
        <Form>
          <Avatar />
          <Title>{t('welcome')} !</Title>
          {error && <Error>{t(error)}</Error>}
          <Group>
            <label htmlFor='email'>{t('email')}</label>
            <Input type='text' name='email' ref={email} required />
          </Group>
          <Group>
            <label htmlFor='password'>{t('password')}</label>
            <Input type='password' name='password' ref={password} required />
          </Group>
          <Group>
            <Button
              type='submit'
              onClick={e => handleSubmit(e)}
              disabled={loading}
            >
              {t('login')}
            </Button>
          </Group>
          <Group mt={30}>
            <Link to='/forgot-password'>{t('forgoPassword')} </Link>
          </Group>
          <Group mt={10}>
            <Link to='/register'>{t('createAccount')}</Link>
          </Group>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
