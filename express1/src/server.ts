import * as express from 'express';

import { ApiRouter } from './routes/api';

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));

app.use('/api', ApiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
     console.log(`Server is running in http://localhost:${PORT}`)
});