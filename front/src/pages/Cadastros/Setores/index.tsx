import React, { useRef } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import api from '../../../services/api';

import { Container, Form, FormTitle } from './styles';

const Setores: React.FC = () => {
  const formRef = useRef<any>(null);
  
  const handleSubmite = async (event: any) => {
    event.preventDefault();
    const setorName = event.target.name.value
    try {
      await api.post('/create-setor', {
        name: setorName
      });
        formRef.current.reset();
        alert('Cadastrado com sucesso!');
      }catch(err){
        alert('Nome já existente!');
      }
    };
    
  return (
    <Container>
      <FormTitle>
        <h1>Cadastro De Setor</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite} ref={formRef}>
          <h3 style={{ color: 'black' }}>Nome</h3>
          <Input name ="name" type="text" required />
        <Button style={{width: '100px'}} type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Setores;
