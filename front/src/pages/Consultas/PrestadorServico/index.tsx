import React from 'react';

import { Container, FormTitle, TableItens } from './styles';

import { TiDelete } from 'react-icons/ti';
import { BsPencil } from 'react-icons/bs';

const prestadoresOptions = [
  {name: 'System Informatica', telefone: '(11)11111-1111', representante:'Caio', id: 1},
  {name: 'Hidro LTDA', telefone: '(22)22222-2222', representante:'Marcelo', id: 2},
  {name: 'Aguia Segurança', telefone: '(33)33333-3333', representante:'Matheus', id: 3},
  {name: 'System Informatica', telefone: '(44)44444-4444', representante:'Jorge', id: 4},
]

const Setores: React.FC = () => {
  return (
    <Container>
      <FormTitle>
        <h1>Consulta De Prestadores De Serviço</h1>
      </FormTitle>
      <TableItens >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Representante</th>
            <th>Opções</th>
          </tr>
        </thead>

        <tbody >
          {prestadoresOptions.map(setor => (
            <tr key={setor.id}>
              <td>{setor.id}</td>
              <td>{setor.name}</td>
              <td>{setor.telefone}</td>
              <td>{setor.representante}</td>
              <th> <TiDelete/>  <BsPencil /></th>
            </tr>
          ))}
         
        </tbody>        
      </TableItens>
    </Container>
  );
};

export default Setores;
