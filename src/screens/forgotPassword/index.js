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
} from './forgotPassword.index'
import Avatar from './components/avatar'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../context/authContext'

const ForgotPassword = () => {
  const email = useRef()
  const { t } = useTranslation()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()

    if (email.current.value.length <= 0) {
      return setError('error_email')
    }

    try {
      setError('')
      setLoading(true)
      await resetPassword(email.current.value)
      history.push('/login')
    } catch (e) {
      setError('error_resetPassword')
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
            <Button
              type='submit'
              onClick={e => handleSubmit(e)}
              disabled={loading}
            >
              {t('resetPassword')}
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

export default ForgotPassword
