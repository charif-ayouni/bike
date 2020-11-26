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

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Avatar />
          <Title>Bienvenue !</Title>
          <Group>
            <label htmlFor='email'>Email</label>
            <Input type='text' name='email' required />
          </Group>
          <Group>
            <label htmlFor='password'>Password</label>
            <Input type='password' name='password' required />
          </Group>
          <Group>
            <Button type='submit'>Je me connecte</Button>
          </Group>
          <Group mt={30}>
            <Link to='/forgot-password'>J'ai oublié mes accès</Link>
          </Group>
          <Group mt={10}>
            <Link to='/register'>Créer un compte</Link>
          </Group>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
