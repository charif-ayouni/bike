import React, { useRef, useState } from 'react'
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
} from './register.index'
import Avatar from './components/avatar'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../context/authContext'

const Register = () => {
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const password = useRef()
  const { t } = useTranslation()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()

    if (firstName.current.value.length <= 0) {
      return setError('error_firstName')
    }

    if (lastName.current.value.length <= 0) {
      return setError('error_lastName')
    }

    if (email.current.value.length <= 0) {
      return setError('error_email')
    }

    if (password.current.value.length <= 6) {
      return setError('error_password_length')
    }

    try {
      setError('')
      setLoading(true)
      await signup({
        email: email.current.value,
        password: password.current.value,
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        photoURL: 'https://thispersondoesnotexist.com/image'
      })
      history.push('/')
    } catch (e) {
      console.log(e)
      setError('error_creating_account')
    }
    setLoading(false)
  }
  return (
    <Container>
      <Wrapper>
        <Form>
          <Avatar />
          <Title>{t('register')}</Title>
          <Title mb={40} size={14}>
            {t('is_easy')}
          </Title>
          {error && <Error>{t(error)}</Error>}
          <Group>
            <label htmlFor='firstname'>{t('firstName')}</label>
            <Input type='text' name='firstName' ref={firstName} required />
          </Group>
          <Group>
            <label htmlFor='lastname'>{t('lastName')}</label>
            <Input type='text' name='lastName' ref={lastName} required />
          </Group>
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
              {t('register')}
            </Button>
          </Group>
          <Group mt={10}>
            <Link to='/login'>{t('haveAccount')}</Link>
          </Group>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
