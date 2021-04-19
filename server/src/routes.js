import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SetorController from './app/controllers/SetorController';
import MaquinasController from './app/controllers/MaquinasController';
import PServicosController from './app/controllers/PServicosController';
import OrdemManutencao from './app/controllers/OrdemManutencao';


import authMiddleware from './app/middlewares/auth';

const routes = new Router();


routes.post('/create-user', UserController.store);
routes.post('/sessions', SessionController.create);

routes.use(authMiddleware);

// SETORES
routes.post('/create-setor', SetorController.store);
routes.get('/index-setor', SetorController.index);
routes.get('/show-setor/:id', SetorController.show);
routes.put('/update-setor', SetorController.update);
routes.delete('/delete-setor', SetorController.delete);

// MAQUINAS
routes.post('/create-maquinas', MaquinasController.store);
routes.get('/index-maquinas', MaquinasController.index);
routes.get('/show-maquinas/:id', MaquinasController.show);
routes.put('/update-maquinas', MaquinasController.update);
routes.delete('/delete-maquinas', MaquinasController.delete);

// PRESTADOR DE SERVIÇO
routes.post('/create-pservico', PServicosController.store);
routes.get('/index-pservico', PServicosController.index);
routes.get('/show-pservico/:id', PServicosController.show);
routes.put('/update-pservico', PServicosController.update);
routes.delete('/delete-pservico', PServicosController.delete);

// ORDEM DE SERVIÇO
routes.post('/create-ordman', OrdemManutencao.store);
routes.get('/index-ordman', OrdemManutencao.index);
routes.get('/show-ordman/:id', OrdemManutencao.show);
routes.put('/update-ordman', OrdemManutencao.update);
routes.delete('/delete-ordman', OrdemManutencao.delete);


export default routes;