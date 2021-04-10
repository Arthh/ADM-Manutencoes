import React, { useCallback } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';

import { Container, Form, FormTitle } from './styles';

const Setores: React.FC = () => {
  
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
        <h1>Cadastro De Setor</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite}>
          <h3 style={{ color: 'black' }}>Nome</h3>
          <Input type="text" required />
          <h3 style={{ color: 'black'}}>Descrição</h3>
          <TextArea  required />
      
        <Button style={{width: '100px'}} type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Setores;
