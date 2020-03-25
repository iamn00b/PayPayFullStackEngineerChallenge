import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('paypay', 'me', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
