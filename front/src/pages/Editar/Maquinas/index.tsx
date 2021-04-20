import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import api from '../../../services/api';

import { Container, Form, FormTitle, Select } from './styles';


const EditarMaquinas: React.FC<any> = (props) => {
    const [maquina,  ] = useState(props.location.state);
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

    const handleSubmite = async (event: any) => {
      event.preventDefault();
      const maquinaName = event.target.name.value
      let setorId;
      !event.target.setor_id.value ? setorId = maquina.setor_id : setorId = event.target.setor_id.value

      try {
        await api.put('/update-maquinas', {
          id: maquina.id,
          name: maquinaName,
          setor_id: Number(setorId)
        });

      }catch(err){
        alert('Nome já existente!');
      }
      alert('Atualizado com sucesso!');
    };

  return (
    <Container>
      <FormTitle>
        <h1>Edição De Maquinario</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite}>
      <h3 style={{ color: 'black' }}>Nome</h3>
          <Input  name="name" defaultValue={maquina.nome} type="text" required />
          <h3 style={{ color: 'black'}}>Setor</h3>
          <Select name="setor_id" options={setores} 
            placeholder={maquina.setor_nome}
          /> 
        <Button style={{width: '100px'}} type="submit">Atualizar</Button>
      </Form>
    </Container>
  );
};

export default EditarMaquinas;
