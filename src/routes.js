import { Router } from 'express';
import marvelController from './services/marvel.controller';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('<h1>Servidor rodando </h1>');
});

routes.get('/personagens', marvelController.index);
routes.get('/personagens', marvelController.filtrar);
routes.get('/personagens/:id', marvelController.detalhar)

export default routes;
