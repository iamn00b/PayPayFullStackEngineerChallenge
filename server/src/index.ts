import express from 'express';
import { createUserRouter } from './User/userRouter';

const app = express();
const port = process.env.PORT || 8000;

app.use('/api', createUserRouter());

app.listen(port, () => console.log(`Listening on port ${port}!`));
