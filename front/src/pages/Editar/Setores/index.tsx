import React, { useCallback, useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import Setores from '../../Cadastros/Setores';

import { Container, Form, FormTitle } from './styles';


const EditarSetor: React.FC<any> = (props) => {
    const [setor, setSetor] = useState(props.location.state.setor);

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
        <h1>Edição De Setor</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite}>
          <h3 style={{ color: 'black' }}>Nome</h3>
          <Input type="text"  defaultValue={setor.name} required />
          <h3 style={{ color: 'black'}}>Descrição</h3>
          <TextArea  defaultValue={setor.descricao} required />
      
        <Button style={{width: '100px'}} type="submit">Atualizar</Button>
      </Form>
    </Container>
  );
};

export default EditarSetor;
