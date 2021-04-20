import React, { useEffect, useState, useRef } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import api from '../../../services/api';


import { Container, Form, FormTitle, Select } from './styles';

const OrdemDeManutencao: React.FC = () => {
  const formRef = useRef<any>(null);
  const [maquinas, setMaquinas] = useState([]);
  const [prestServicos, setPrestServicos] = useState([]);
  
  useEffect(() => {
    async function loadMaquinas() {
      try{
        const response = await api.get('/index-maquinas');
          const formatedMaquinas = response.data.map((maquina: any) =>{
            return {label: maquina.nome, value: maquina.id}
          })
          setMaquinas(formatedMaquinas);
        }catch(err){
          alert('Erro ao recuperar setores!');
        }
    }
    async function loadPrestadorServicos() {
      try{
        const response = await api.get('/index-pservico');
          const formatedPrestServicos = response.data.map((prest: any) =>{
            return {label: prest.nome, value: prest.id}
          })
          setPrestServicos(formatedPrestServicos);
        }catch(err){
          alert('Erro ao recuperar setores!');
        }
    }
    
    loadMaquinas();
    loadPrestadorServicos();

  },[]);

  const handleSubmite = async(event: any) => {
    event.preventDefault();
    try {
      await api.post('/create-ordman', {
        maquina_id: event.target.maquina_id.value,
        prestador_id: event.target.prestador_id.value,
        descricao: event.target.descricao.value,
        responsavel: event.target.responsavel.value,
        preco: event.target.preco.value,
        data: event.target.data.value,
        }
      )
      formRef.current.reset();
      alert('Cadastrado com sucesso!');
    }catch(err){
       alert('Erro ao cadastrar na api!');
    }

  };

  return (
    <Container>
      <FormTitle>
        <h1>Cadastro De Ordem De Manutenção</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite} ref={formRef}>
          <h3 style={{ color: 'black'}}>Maquinário</h3>
          <Select name="maquina_id" options={maquinas} />
          <h3 style={{ color: 'black'}}>Prestador Do Serviço</h3>
          <Select name="prestador_id" options={prestServicos} />
          <h3 style={{ color: 'black' }}>Descrição</h3>
          <TextArea name="descricao" required />
          <h3 style={{ color: 'black' }}>Responsavel</h3>
          <Input name="responsavel"type="text" required />
          <h3 style={{ color: 'black' }}>Preço</h3>
          <Input name="preco" type="number" step="any" required />
          <h3 style={{ color: 'black' }}>Data</h3>
          <Input name="data" type="date" required />
        <Button style={{width: '100px'}} type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default OrdemDeManutencao;
