import React from 'react'
import {
  Container,
  Wrapper,
  Form,
  Button,
  Input,
  Group,
  Title,
  Link
} from './login.index'
import Avatar from './components/avatar'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Wrapper>
        <Form>
          <Avatar />
          <Title>{t('welcome')} !</Title>
          <Group>
            <label htmlFor='email'>{t('email')}</label>
            <Input type='text' name='email' required />
          </Group>
          <Group>
            <label htmlFor='password'>{t('password')}</label>
            <Input type='password' name='password' required />
          </Group>
          <Group>
            <Button>
              <Link to='/'>{t('login')}</Link>
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
