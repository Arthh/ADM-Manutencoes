/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import Layout from '../components/Layout';

// CADASTROS
import MenuCadastros from '../pages/Cadastros/MenuCadastros';
import CadastroSetores from '../pages/Cadastros/Setores';
import CadastroMaquinario from '../pages/Cadastros/Maquinario';
import CadastroPrestServicos from '../pages/Cadastros/PrestadorDeServiço';
import CadastroOrdemDeManutencao from '../pages/Cadastros/OrdemDeManutencao';
import CadastroUsuario from '../pages/Cadastros/Usuarios';

// CONSULTAS
import MenuConsultas from '../pages/Consultas/MenuConsultas';
import ConsultaSetores from '../pages/Consultas/Setor';
import ConsultaMaquinario from '../pages/Consultas/Maquinario';
import ConsultaPrestServicos from '../pages/Consultas/PrestadorServico';
import ConsultaOrdemManutencao from '../pages/Consultas/OrdemManutencao';

//EDITAR
import EditarSetor from '../pages/Editar/Setores';
import EditarMaquina from '../pages/Editar/Maquinas';
import EditarPrestadorServico from '../pages/Editar/PrestadorServico';

import PrivateRoutes from './PrivateRoutes';

const AuthRoutes: React.FC = () => (
  <Switch>
    <PrivateRoutes path="/" exact component={() => <Redirect to="/cadastros/menu" />} />
    <Layout>
      {/* //VOLTAR ESSAS ROTAS PRA PRIVATEROUTES */}

      {/* CADASTROS */}
      <PrivateRoutes path="/cadastros/menu" exact component={MenuCadastros} />
      <PrivateRoutes path="/cadastros/setores" exact  component={CadastroSetores} />
      <PrivateRoutes path="/cadastros/maquinario" exact  component={CadastroMaquinario} />
      <PrivateRoutes path="/cadastros/prestservicos" exact  component={CadastroPrestServicos} />
      <PrivateRoutes path="/cadastros/ordmanutencao" exact component={CadastroOrdemDeManutencao} />
      <PrivateRoutes path="/cadastro/user" exact component={CadastroUsuario} />

      {/* CONSULTAS */}
      <PrivateRoutes path="/consultas/menu" exact component={MenuConsultas} />
      <PrivateRoutes path="/consultas/setores" exact component={ConsultaSetores} />
      <PrivateRoutes path="/consultas/maquinario" exact component={ConsultaMaquinario} />
      <PrivateRoutes path="/consultas/prestservicos" exact component={ConsultaPrestServicos} />
      <PrivateRoutes path="/consultas/ordmanutencao" exact component={ConsultaOrdemManutencao} />

      {/* EDITAR */}
      <PrivateRoutes path="/editar/setor" exact component={ (props: any) => EditarSetor({...props}) } />
      <PrivateRoutes path="/editar/maquina" exact component={ (props: any) => EditarMaquina({...props}) } />
      <PrivateRoutes path="/editar/prestservico" exact component={ (props: any) => EditarPrestadorServico({...props}) } />
    
    </Layout>
  </Switch>
);

export default AuthRoutes;
