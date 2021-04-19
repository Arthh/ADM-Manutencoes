import React from 'react';

import { Container, FormTitle, TableItens } from './styles';

import { TiDelete } from 'react-icons/ti';
import { BsPencil } from 'react-icons/bs';

const ordemOptions = [
  {maquina: 'Impressora', prestador: 'System Informatica', descricao: 'Impressora parou de funcionar, estava travada', responsavel: 'João Pedro', preco: 'R&80,00', status: 'Em Andamento', data: '22/03/21', id: 1},
  {maquina: 'Impressora', prestador: 'Eletro Manutenções', descricao: 'LED da televisão queimou', responsavel: 'Gabriel', preco: 'R&230,10', status: 'Finalizado', data: '21/03/21', id: 2},
  {maquina: 'Bomba D´agua', prestador: 'Hidro LTDA', descricao: 'Gatilho quebrado', responsavel: 'Marcelo', preco: 'R&45,50', status: 'Não Iniciado', data: '24/03/21', id: 3},
]

const Setores: React.FC = () => {
  return (
    <Container>
      <FormTitle>
        <h1>Consulta De Ordens De Manutenção</h1>
      </FormTitle>
      <TableItens >
        <thead>
          <tr>
            <th>ID</th>
            <th>Maquina</th>
            <th>Prestador</th>
            <th>Descrição</th>
            <th>Responsavel</th>
            <th>Preço</th>
            <th>Status</th>
            <th>Data</th>
            <th>Opções</th>
          </tr>
        </thead>

        <tbody >
          {ordemOptions.map(setor => (
            <tr key={setor.id}>
              <td>{setor.id}</td>
              <td>{setor.maquina}</td>
              <td>{setor.prestador}</td>
              <td>{setor.descricao}</td>
              <td>{setor.responsavel}</td>
              <td>{setor.preco}</td>
              <td>{setor.status}</td>
              <td>{setor.data}</td>
              <th> <TiDelete/>  <BsPencil /></th>
            </tr>
          ))}
         
        </tbody>        
      </TableItens>
    </Container>
  );
};

export default Setores;
