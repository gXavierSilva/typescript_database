//Arquivo ser/index.ts

import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './session.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', usersRouter);

export default routes;