import React from 'react';

import { Container, FormTitle, TableItens } from './styles';

import history from '../../../history';

import { TiDelete } from 'react-icons/ti';
import { BsPencil } from 'react-icons/bs';

const setoresOptions = [
  {name: 'Laboratorio', descricao: 'laboratorio quimico 1', id: 1},
  {name: 'Laboratorio 2', descricao: 'laboratorio quimico 1 ', id: 2},
  {name: 'Escritorio', descricao: 'financeiro ', id: 3},
  {name: 'Garagem', descricao: 'garagem 1, caminhões internos ', id: 4},
]

const Setores: React.FC = () => {

  const editarSetor = (setor: any) => {
    history.push({
      pathname: '/editar/setor',
      state: {
        setor: setor
      }
    })
  }

  return (
    <Container>
      <FormTitle>
        <h1>Consulta De Setor</h1>
      </FormTitle>
      <TableItens >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Opções</th>
          </tr>
        </thead>

        <tbody >
          {setoresOptions.map(setor => (
            <tr key={setor.id}>
              <td>{setor.id}</td>
              <td>{setor.name}</td>
              <td>{setor.descricao}</td>
              <th> 
              <TiDelete/> 
              <BsPencil onClick={() => editarSetor(setor)}/>
              </th>
            </tr>
          ))}
         
        </tbody>        
      </TableItens>
    </Container>
  );
};

export default Setores;
