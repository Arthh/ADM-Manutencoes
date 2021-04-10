import React, { useCallback } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
// import SelectOptions from '../../../components/SelectOptions';

import { Container, Form, FormTitle, Select } from './styles';

const optionsTeste = [
  { label: 'Escritorio', value: 1 },
  { label: 'Recepção', value: 2 },
  { label: 'Garagem', value: 3 },
];

const Maquinario: React.FC = () => {
  
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
        <h1>Cadastro De Maquinário</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite}>
          <h3 style={{ color: 'black' }}>Nome</h3>
          <Input  type="text" required />
          <h3 style={{ color: 'black' }}>Descrição</h3>
          <Input  type="text" required />
          <h3 style={{ color: 'black'}}>Setor</h3>
          <Select options={optionsTeste} />
      
        <Button style={{width: '100px'}} type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Maquinario;
