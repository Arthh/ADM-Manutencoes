import React, { useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import api from '../../../services/api';

import { Container, Form, FormTitle } from './styles';


const EditarSetor: React.FC<any> = (props) => {
    const [setor, ] = useState(props.location.state);
  
    const handleSubmite = async (event: any) => {
      event.preventDefault();
      const setorName = event.target.name.value
      try {
        await api.put('/update-setor', {
          id: setor.id,
          name: setorName
        });

      }catch(err){
        alert('Nome já existente!');
      }

      alert('Atualizado com sucesso!');
    };

  return (
    <Container>
      <FormTitle>
        <h1>Edição De Setor</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite}>
          <h3 style={{ color: 'black' }}>Nome</h3>
          <Input name="name" type="text"  defaultValue={setor.nome} required />
        <Button style={{width: '100px'}} type="submit">Atualizar</Button>
      </Form>
    </Container>
  );
};

export default EditarSetor;
