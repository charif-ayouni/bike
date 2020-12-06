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
} from './register.index'
import Avatar from './components/avatar'
import { useTranslation } from 'react-i18next'

const Register = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Wrapper>
        <Form>
          <Avatar />
          <Title>{t('register')}</Title>
          <Title mb={40} size={14}>
            C'est rapide et facile
          </Title>
          <Group>
            <label htmlFor='firstname'>{t('firstName')}</label>
            <Input type='text' name='firstName' required />
          </Group>
          <Group>
            <label htmlFor='lastname'>{t('lastName')}</label>
            <Input type='text' name='lastName' required />
          </Group>
          <Group>
            <label htmlFor='email'>{t('email')}</label>
            <Input type='text' name='email' required />
          </Group>
          <Group>
            <label htmlFor='password'>{t('password')}</label>
            <Input type='password' name='password' required />
          </Group>
          <Group>
            <Button type='submit'>{t('register')}</Button>
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
