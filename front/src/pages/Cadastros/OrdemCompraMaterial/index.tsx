import React, { useCallback } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
// import SelectOptions from '../../../components/SelectOptions';

import { Container, Form, FormTitle, Select } from './styles';

const maquinasOptions = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
];


const OrdemCompraMaterial: React.FC = () => {
  
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
        <h1>Cadastro De Ordem Compra De Material</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite}>
          <h3 style={{ color: 'black'}}>Manutenção ID</h3>
          <Select options={maquinasOptions} />
          <h3 style={{ color: 'black'}}>Material</h3>
          <Input  type="text" required />
          <h3 style={{ color: 'black' }}>Quantidade</h3>
          <Input  type="number" required />
          <h3 style={{ color: 'black' }}>Descrição</h3>
          <Input  type="text" required />
          <h3 style={{ color: 'black' }}>Preço</h3>
          <Input  type="text" required />
          <h3 style={{ color: 'black' }}>Data</h3>
          <Input  type="date" required />      
        <Button style={{width: '100px'}} type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default OrdemCompraMaterial;
