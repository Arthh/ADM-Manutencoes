import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Container, Form, FormTitle, FormInputContainer } from './styles';

const Lancamento: React.FC = () => {
  return (
    <Container>
      <FormTitle>
        <h1>Lançamentos Diarios </h1>
      </FormTitle>
      <Form onSubmit={() => console.log('alo')}>
        <FormInputContainer>
          <span style={{ color: 'black' }}>Input 1</span>
          <Input placeholder="Email" type="email" required />
          <span style={{ color: 'black' }}>Input 2</span>
          <Input placeholder="Senha" type="password" required />
        </FormInputContainer>
      </Form>
      <Button type="submit">Logar</Button>
    </Container>
  );
};

export default Lancamento;
