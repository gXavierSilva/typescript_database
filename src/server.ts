import express, { request, response } from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'ô potência' });
});

app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});