import React, { useCallback } from 'react';

import { Container, FormTitle } from './styles';

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
     
    </Container>
  );
};

export default Setores;
