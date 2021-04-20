import React, { useRef } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import api from '../../../services/api';

import { Container, Form, FormTitle } from './styles';

const Usuarios: React.FC = () => {
  const formRef = useRef<any>(null);
  
  const handleSubmite = async (event: any) => {
    event.preventDefault();
    try {
      const resp = await api.post('/create-user', {
        email: event.target.email.value,
        password: event.target.password.value
      });
        console.log(resp);
       
        if(resp.data.error){
          alert(resp.data.error);
        }else {
          formRef.current.reset();
          alert('Cadastrado com sucesso!');
        }
      }catch(err){
        alert('Erro na requisição, tente novamente!');
      }
    };
    
  return (
    <Container>
      <FormTitle>
        <h1>Cadastro De Usuario</h1>
      </FormTitle>
      <Form onSubmit={handleSubmite} ref={formRef}>
          <h3 style={{ color: 'black' }}>Email</h3>
          <Input name ="email" type="email" required />
          <h3 style={{ color: 'black' }}>Senha</h3>
          <Input name ="password" type="password" required />
        <Button style={{width: '100px'}} type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Usuarios;
