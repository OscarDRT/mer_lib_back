import express from 'express';
import { itemRouter } from './routes';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.use('/api/items', itemRouter);

app.listen(3000, () => {
  console.log('Server runnuning on port 3000');
});
