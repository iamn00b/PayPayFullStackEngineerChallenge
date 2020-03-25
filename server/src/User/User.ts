import { Model, DataTypes } from 'sequelize';
import sequelize from '../App/Sequelize';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    name: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
  },
  { sequelize, modelName: 'user' }
);

export default User;
