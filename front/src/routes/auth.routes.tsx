/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import MenuPainel from '../pages/PainelBordo/MenuPainel';
import Visao from '../pages/PainelBordo/Visao';
import Lancamento from '../pages/PainelBordo/Lancamento';

import MenuCadastros from '../pages/Cadastros/MenuCadastros';
import CadastroSetores from '../pages/Cadastros/Setores';
import CadastroMaquinario from '../pages/Cadastros/Maquinario';
import CadastroPrestServicos from '../pages/Cadastros/PrestadorDeServiço';
import OrdemDeManutencao from '../pages/Cadastros/OrdemDeManutencao';

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

      {/* depois refatorar visao/lançamento para ser uma tela so  */}
      <Route path="/painel/menu" exact component={MenuPainel} />
      <Route path="/painel/visao" exact component={Visao} />
      <Route path="/painel/lancamento" exact component={Lancamento} />
    </Layout>
  </Switch>
);

export default AuthRoutes;
