/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';

// CADASTROS
import MenuCadastros from '../pages/Cadastros/MenuCadastros';
import CadastroSetores from '../pages/Cadastros/Setores';
import CadastroMaquinario from '../pages/Cadastros/Maquinario';
import CadastroPrestServicos from '../pages/Cadastros/PrestadorDeServiço';
import OrdemDeManutencao from '../pages/Cadastros/OrdemDeManutencao';
import OrdemCompraMaterial from '../pages/Cadastros/OrdemCompraMaterial';

// CONSULTAS
import MenuConsultas from '../pages/Consultas/MenuConsultas';
import ConsultaSetores from '../pages/Consultas/Setor';

// import PrivateRoutes from './PrivateRoutes';
import Login from '../pages/Login';

const AuthRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Layout>
      {/* //VOLTAR ESSAS ROTAS PRA PRIVATEROUTES */}

      {/* CADASTROS */}
      <Route path="/cadastros/menu" exact component={MenuCadastros} />
      <Route path="/cadastros/setores" exact  component={CadastroSetores} />
      <Route path="/cadastros/maquinario" exact  component={CadastroMaquinario} />
      <Route path="/cadastros/prestservicos" exact  component={CadastroPrestServicos} />
      <Route path="/cadastros/ordmanutencao" exact component={OrdemDeManutencao} />
      <Route path="/cadastros/ordcompmaterial" exact component={OrdemCompraMaterial} />

      {/* CONSULTAS */}
      <Route path="/consultas/menu" exact component={MenuConsultas} />
      <Route path="/consultas/setores" exact component={ConsultaSetores} />

    </Layout>
  </Switch>
);

export default AuthRoutes;
