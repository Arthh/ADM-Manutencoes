import React, { useCallback } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Container, Form, FormTitle } from './styles';

const PrestadoresDeServico: React.FC = () => {
  
  const handleSubmite = useCallback(
    async event => {
      event.preventDefault();
      console.log('alou');
    },
    [],
  );

  return (
    <Container>
      <FormTitle>
        <h1>Cadastro De Prestadores De Serviço</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite}>
          <h3 style={{ color: 'black' }}>Nome</h3>
          <Input type="text" required />
          <h3 style={{ color: 'black' }}>CPF/CNPJ</h3>
          <Input type="text" required />
          <h3 style={{ color: 'black' }}>Telefone</h3>
          <Input type="text" required />
          <h3 style={{ color: 'black' }}>Representante</h3>
          <Input type="text" required />
        <Button style={{width: '100px'}} type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default PrestadoresDeServico;
