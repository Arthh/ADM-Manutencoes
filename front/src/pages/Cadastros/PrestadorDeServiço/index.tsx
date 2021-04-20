import React, { useRef } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import api from '../../../services/api';

import { Container, Form, FormTitle } from './styles';

const PrestadoresDeServico: React.FC = () => {
  const formRef = useRef<any>(null);

  const handleSubmite = async(event: any) => {
    event.preventDefault();
    try {
      await api.post('/create-pservico', {
        name: event.target.name.value,
        cnpj: event.target.cnpj.value,
        telefone: event.target.telefone.value,
        representante: event.target.representante.value,  
      }
      )
      formRef.current.reset();
      alert('Cadastrado com sucesso!');
    }catch(err){
       alert('Erro ao cadastrar na api!');
    }

  };

  return (
    <Container>
      <FormTitle>
        <h1>Cadastro De Prestadores De Serviço</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite} ref={formRef}>
          <h3 style={{ color: 'black' }}>Nome</h3>
          <Input name="name" type="text" required />
          <h3 style={{ color: 'black' }}>CPF/CNPJ</h3>
          <Input name="cnpj" type="text" required />
          <h3 style={{ color: 'black' }}>Telefone</h3>
          <Input name="telefone" type="text" required />
          <h3 style={{ color: 'black' }}>Representante</h3>
          <Input name="representante" type="text" required />
        <Button style={{width: '100px'}} type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default PrestadoresDeServico;
