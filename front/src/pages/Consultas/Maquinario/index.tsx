import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

import { Container, FormTitle, TableItens } from './styles';

import { TiDelete } from 'react-icons/ti';
import { BsPencil } from 'react-icons/bs';
import { useHistory } from 'react-router';

const Maquinarios: React.FC = () => {
  let history = useHistory();
  const [maquinas, setMaquinas] = useState([]);

  useEffect(() => {
    async function loadMaquinas() {
      try{
        const response = await api.get('/index-maquinas');
        setMaquinas(response.data);
        }catch(err){
          alert('Erro ao recuperar maquinas!');
        } 
      };

      loadMaquinas();
  },[])

  const editHandler = (maquina: any) => {
    history.push('/editar/maquina', maquina);
  }

  const deleteHandler = async(maquinaId: number) => {
    try {
      await api.delete(`/delete-maquinas/${maquinaId}`);
      const aux = maquinas.filter((maquina:any) => maquina.id !== maquinaId);
      setMaquinas(aux);
      alert('Removido com sucesso!');
    }catch(err){
      alert('Erro ao remover')
    }
  }

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
          {maquinas.map((maquina:any) => (
            <tr key={maquina.id}>
              <td>{maquina.id}</td>
              <td>{maquina.nome}</td>
              <td>{maquina.setor_nome}</td>
              <th> 
              <TiDelete onClick={() => deleteHandler(maquina.id)}/> 
              <BsPencil style={{marginLeft:'10px'}} onClick={() => editHandler(maquina)}/>
               </th>
            </tr>
          ))}
         
        </tbody>        
      </TableItens>
    </Container>
  );
};

export default Maquinarios;
