import React, { useEffect, useState } from 'react';

import { Container, FormTitle, TableItens } from './styles';
import api from '../../../services/api';

import { useHistory } from "react-router-dom";

import { TiDelete } from 'react-icons/ti';
import { BsPencil } from 'react-icons/bs';

const PrestadoresServico: React.FC = () => {
  let history = useHistory();
  const [prestadores, setPrestadores] = useState([]);

  useEffect(() => {
    async function loadPrestadoresServico() {
      try{
        const response = await api.get('/index-pservico');
        setPrestadores(response.data);
        }catch(err){
          alert('Erro ao recuperar prestadores de serviço!');
        } 
      };

      loadPrestadoresServico();
  },[])

  const editHandler = (prestador: any) => {
    history.push('/editar/prestservico', prestador);
  }

  const deleteHandler = async(prestadorId: number) => {
    try {
      await api.delete(`/delete-pservico/${prestadorId}`);
      const aux = prestadores.filter((pestador:any) => pestador.id !== prestadorId);
      setPrestadores(aux);
      alert('Removido com sucesso!');
    }catch(err){
      alert('Erro ao remover')
    }
  }

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
          {prestadores.map((prestador:any) => (
            <tr key={prestador.id}>
              <td>{prestador.id}</td>
              <td>{prestador.nome}</td>
              <td>{prestador.telefone}</td>
              <td>{prestador.representante}</td>
              <th> 
              <TiDelete onClick={() => deleteHandler(prestador.id)}/> 
              <BsPencil style={{marginLeft:'10px'}} onClick={() => editHandler(prestador)}/>
              </th>
            
            </tr>
          ))}
         
        </tbody>        
      </TableItens>
    </Container>
  );
};

export default PrestadoresServico;
