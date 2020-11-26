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

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Avatar />
          <Title>S’inscrire</Title>
          <Title mb={40} size={14}>
            C'est rapide et facile
          </Title>
          <Group>
            <label htmlFor='firstname'>Prénom</label>
            <Input type='text' name='firstname' required />
          </Group>
          <Group>
            <label htmlFor='lastname'>Nom</label>
            <Input type='text' name='lastname' required />
          </Group>
          <Group>
            <label htmlFor='email'>Email</label>
            <Input type='text' name='email' required />
          </Group>
          <Group>
            <label htmlFor='password'>Password</label>
            <Input type='password' name='password' required />
          </Group>
          <Group>
            <Button type='submit'>S'inscrire</Button>
          </Group>
          <Group mt={10}>
            <Link to='/login'>J'ai déjà un compte</Link>
          </Group>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
