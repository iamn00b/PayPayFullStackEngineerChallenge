import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import sequelize from './App/Sequelize';
import { createUserRouter } from './User/Router';

import { createPerformanceReviewRouter } from './PerformanceReview/Router';
import { createAssignmentRouter } from './Assignment/Router';
import Seed from './App/Seed';

const app = express();
const port = process.env.PORT || 8000;

sequelize.sync({ force: true }).then(Seed);

app.use(cors());
app.use(bodyParser.json());

app.use(
  '/api',
  createUserRouter(),
  createPerformanceReviewRouter(),
  createAssignmentRouter()
);

app.listen(port, () => console.log(`Listening on port ${port}!`));
