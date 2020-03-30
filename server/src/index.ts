import express from 'express';
import bodyParser from 'body-parser';
import { createUserRouter } from './User/Router';
import sequelize from './App/Sequelize';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8000;

sequelize.sync({ force: true });
// PerformanceReview.sync({ force: true });

app.use(cors());
app.use(bodyParser.json());
app.use('/api', createUserRouter());

app.listen(port, () => console.log(`Listening on port ${port}!`));
