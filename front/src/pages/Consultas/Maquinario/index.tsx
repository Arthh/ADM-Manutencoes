import React from 'react';

import { Container, FormTitle, TableItens } from './styles';

import { TiDelete } from 'react-icons/ti';
import { BsPencil } from 'react-icons/bs';

const maquinarioOptions = [
  {name: 'Impressora', setor: 'Laboratorio 1', id: 1},
  {name: 'Impressora ', setor: 'Laboratorio 2 ', id: 2},
  {name: 'Bomba D´agua', setor: 'Garagem ', id: 3},
  {name: 'Tanque Óleo', setor: 'Garagem', id: 4},
]

const Setores: React.FC = () => {
  return (
    <Container>
      <FormTitle>
        <h1>Consulta De Maquinário</h1>
      </FormTitle>
      <TableItens >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Setor</th>
            <th>Opções</th>
          </tr>
        </thead>

        <tbody >
          {maquinarioOptions.map(setor => (
            <tr key={setor.id}>
              <td>{setor.id}</td>
              <td>{setor.name}</td>
              <td>{setor.setor}</td>
              <th> <TiDelete/>  <BsPencil /></th>
            </tr>
          ))}
         
        </tbody>        
      </TableItens>
    </Container>
  );
};

export default Setores;
