import express from 'express';
import bodyParser from 'body-parser';
import { createUserRouter } from './User/Router';
import sequelize from './App/Sequelize';
import PerformanceReview from './PerformanceReview';

const app = express();
const port = process.env.PORT || 8000;

sequelize.sync();
PerformanceReview.sync({ force: true });

app.use(bodyParser.json());
app.use('/api', createUserRouter());

app.listen(port, () => console.log(`Listening on port ${port}!`));
