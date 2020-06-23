import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(express.json())

app.use(cors({
  exposedHeaders: ['Content-Length', 'x-total-count'],
}));
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333, () => [
  console.log('Server is running on port 3333')
])