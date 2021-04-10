import React, { useCallback } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
// import SelectOptions from '../../../components/SelectOptions';

import { Container, Form, FormTitle, Select } from './styles';

const maquinasOptions = [
  { label: 'Impressora', value: 1 },
  { label: 'Bomba D´agua', value: 2 },
  { label: 'Tanque De Ar', value: 3 },
];

const prestadoresOptions = [
  { label: 'Hidro Manutenções', value: 1 },
  { label: 'AirValley', value: 2 },
  { label: 'InfoTech', value: 3 },
];

const statusOptions = [
  { label: 'Não Iniciado', value: 1 },
  { label: 'Em Andamento', value: 2 },
  { label: 'Finalizada', value: 3 },
];

const OrdemDeManutencao: React.FC = () => {
  
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
        <h1>Cadastro De Ordem De Manutenção</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite}>
          <h3 style={{ color: 'black'}}>Maquinário</h3>
          <Select options={maquinasOptions} />
          <h3 style={{ color: 'black'}}>Prestador Do Serviço</h3>
          <Select options={prestadoresOptions} />
          <h3 style={{ color: 'black' }}>Descrição</h3>
          <Input  type="text" required />
          <h3 style={{ color: 'black' }}>Responsavel</h3>
          <Input  type="text" required />
          <h3 style={{ color: 'black' }}>Preço</h3>
          <Input  type="text" required />
          <h3 style={{ color: 'black' }}>Status</h3>
          <Select options={statusOptions} />
          <h3 style={{ color: 'black' }}>Data</h3>
          <Input  type="date" required />
          
      
        <Button style={{width: '100px'}} type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default OrdemDeManutencao;
