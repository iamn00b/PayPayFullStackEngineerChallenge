import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import sequelize from './App/Sequelize';
import { createUserRouter } from './User/Router';

import { createPerformanceReviewRouter } from './PerformanceReview/Router';
import { createAssignmentRouter } from './Assignment/Router';
import User from './User';

const app = express();
const port = process.env.PORT || 8000;

sequelize.sync({ force: true }).then(() => {
  return Promise.all([
    User.create({
      name: 'Employee 1',
      email: 'employee1@example.com',
      role: 'ADMIN',
      title: 'Frontend Engineer',
    }),
    User.create({
      name: 'Employee 2',
      email: 'employee2@example.com',
      role: 'EMPLOYEE',
      title: 'Frontend Engineer',
    }),
    User.create({
      name: 'Employee 3',
      email: 'employee3@example.com',
      role: 'EMPLOYEE',
      title: 'Backend Engineer',
    }),
  ]);
});

app.use(cors());
app.use(bodyParser.json());

app.use(
  '/api',
  createUserRouter(),
  createPerformanceReviewRouter(),
  createAssignmentRouter()
);

app.listen(port, () => console.log(`Listening on port ${port}!`));
