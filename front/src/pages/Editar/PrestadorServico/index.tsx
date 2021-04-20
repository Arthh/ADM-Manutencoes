import React, { useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import api from '../../../services/api';

import { Container, Form, FormTitle } from './styles';


const EditarPrestadorServico: React.FC<any> = (props) => {
    const [prestador, ] = useState(props.location.state);
  
    const handleSubmite = async (event: any) => {
      event.preventDefault();
      try {
        await api.put('/update-pservico', {
          id: prestador.id,
          name: event.target.name.value,
          cnpj: event.target.cnpj.value,
          telefone: event.target.telefone.value,
          representante: event.target.representante.value
        });

      }catch(err){
        alert('Nome já existente!');
      }

      alert('Atualizado com sucesso!');
    };

  return (
    <Container>
      <FormTitle>
        <h1>Edição De Prestadore De Serviço</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite}>
      <h3 style={{ color: 'black' }}>Nome</h3>
          <Input defaultValue={prestador.nome} name="name" type="text" required />
          <h3 style={{ color: 'black' }}>CPF/CNPJ</h3>
          <Input defaultValue={prestador.cnpj} name="cnpj" type="text" required />
          <h3 style={{ color: 'black' }}>Telefone</h3>
          <Input defaultValue={prestador.telefone} name="telefone" type="text" required />
          <h3 style={{ color: 'black' }}>Representante</h3>
          <Input defaultValue={prestador.representante} name="representante" type="text" required />
        <Button style={{width: '100px'}} type="submit">Atualizar</Button>
      </Form>
    </Container>
  );
};

export default EditarPrestadorServico;
