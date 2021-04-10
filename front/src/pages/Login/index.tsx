import React, { useCallback, useState } from 'react';

import { useHistory } from 'react-router';
import { Container, Logo, Form, FormTitle } from './styles';

import logoImg from '../../assets/logoAside.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassowrd] = useState<string>('');

  const history = useHistory();

  const { signIn } = useAuth();

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();

      await signIn({ email, password });

      history.go(0);
    },
    [email, history, password, signIn],
  );

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="LedSe" />
        <h2>A.D.M Manutenções</h2>
      </Logo>

      <Form onSubmit={handleLogin}>
        <FormTitle>
          <h1>Login</h1>
        </FormTitle>

        <Input
          placeholder="Email"
          type="email"
          required
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          required
          onChange={e => setPassowrd(e.target.value)}
        />

        <Button type="submit">Logar</Button>
      </Form>
    </Container>
  );
};

export default Login;
