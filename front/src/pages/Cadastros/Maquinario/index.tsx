import React, { useEffect, useState, useRef } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import api from '../../../services/api';
// import SelectOptions from '../../../components/SelectOptions';

import { Container, Form, FormTitle, Select } from './styles';

const Maquinario: React.FC = () => {
  const formRef = useRef<any>(null);
  const [setores, setSetores] = useState([]);

  useEffect(() => {
    async function loadSetores(){
      try{
      const response = await api.get('/index-setor');
        const formatedSetores = response.data.map((setor: any) =>{
          return {label: setor.nome, value: setor.id}
        })
        setSetores(formatedSetores);
      }catch(err){
        alert('Erro ao recuperar setores!');
      }
    };

    loadSetores();
  },[]);

  const handleSubmite = async(event: any) => {
    event.preventDefault();
    try {
      await api.post('/create-maquinas', {
        name: event.target.name.value,
        setor_id: event.target.setor_id.value
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
        <h1>Cadastro De Maquinário</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite} ref={formRef}>
          <h3 style={{ color: 'black' }}>Nome</h3>
          <Input  name="name" type="text" required />
          <h3 style={{ color: 'black'}}>Setor</h3>
          <Select name="setor_id" options={setores} />   
        <Button style={{width: '100px'}} type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Maquinario;
