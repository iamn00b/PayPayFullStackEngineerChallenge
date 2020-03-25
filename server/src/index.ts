import express from 'express';
import { createUserRouter } from './User/userRouter';
import sequelize from './App/Sequelize';

const app = express();
const port = process.env.PORT || 8000;

sequelize.sync();

app.use('/api', createUserRouter());

app.listen(port, () => console.log(`Listening on port ${port}!`));
