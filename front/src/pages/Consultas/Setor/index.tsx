import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

import { Container, FormTitle, TableItens } from './styles';

import { useHistory } from "react-router-dom";

import { TiDelete } from 'react-icons/ti';
import { BsPencil } from 'react-icons/bs';

const Setores: React.FC = () => {
  let history = useHistory();
  const [setores, setSetores] = useState([]);

  useEffect(() => {
    async function loadSetores() {
      try{
        const response = await api.get('/index-setor');
          setSetores(response.data);
        }catch(err){
          alert('Erro ao recuperar setores!');
        } 
      };

      loadSetores();
  },[])

  const editHandler = (setor: any) => {
    history.push('/editar/setor', setor);
  }
  
  const deleteHandler = async(setorId: number) => {
    try {
      await api.delete(`/delete-setor/${setorId}`);
      const aux = setores.filter((setor:any) => setor.id !== setorId);
      setSetores(aux);
      alert('Removido com sucesso!');
    }catch(err){
      alert('Erro ao remover')
    }
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
            <th>Opções</th>
          </tr>
        </thead>

        <tbody >
          {setores.map((setor: any) => (
            <tr key={setor.id}>
              <td>{setor.id}</td>
              <td>{setor.nome}</td>
              <th> 
              <TiDelete onClick={() => deleteHandler(setor.id)}/> 
              <BsPencil style={{marginLeft:'10px'}} onClick={() => editHandler(setor)}/>
              </th>
            </tr>
          ))}
         
        </tbody>        
      </TableItens>
    </Container>
  );
};

export default Setores;
