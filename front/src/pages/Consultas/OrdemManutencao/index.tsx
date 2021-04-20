import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

import { Container, FormTitle, TableItens } from './styles';

import formatCurrency from '../../../utils/formatCurrency';
import formatDate from '../../../utils/formatDate';

import { TiDelete } from 'react-icons/ti';
// import { BsPencil } from 'react-icons/bs';


const OrdemManutencao: React.FC = () => {
  const [ordensManutencao, setOrdensManutencao] = useState([]);

  useEffect(() => {
    async function loadOrdensManutencao() {
      try{
        const response = await api.get('/index-ordman');
        console.log(response.data);
        setOrdensManutencao(response.data);
        }catch(err){
          alert('Erro ao recuperar maquinas!');
        } 
      };

      loadOrdensManutencao();
  },[]);


const deleteHandler = async(ordemId: number) => {
  try {
    await api.delete(`/delete-ordman/${ordemId}`);
    const aux = ordensManutencao.filter((ordem:any) => ordem.id !== ordemId);
    setOrdensManutencao(aux);
    alert('Removido com sucesso!');
  }catch(err){
    alert('Erro ao remover')
  }
}

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
            <th>Data</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody >
          {ordensManutencao.map((ordem: any) => (
            <tr key={ordem.id}>
              <td>{ordem.id}</td>
              <td>{ordem.maquina_nome}</td>
              <td>{ordem.prestador_nome}</td>
              <td>{ordem.descricao}</td>
              <td>{ordem.responsavel}</td>
              <td>{formatCurrency(ordem.preco)}</td>
              <td>{formatDate(ordem.data)}</td>
              <th> 
              <TiDelete onClick={() => deleteHandler(ordem.id)}/> 
                {/* <BsPencil /> */}
              </th>
            </tr>
          ))}
         
        </tbody>        
      </TableItens>
    </Container>
  );
};

export default OrdemManutencao;
