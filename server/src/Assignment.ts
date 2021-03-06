import { Model, DataTypes } from 'sequelize';
import sequelize from './App/Sequelize';
import User from './User';
import PerformanceReview from './PerformanceReview';

class Assignment extends Model {
  public id!: number;
  public userId!: number;
  public assignToUserId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Assignment.init({}, { sequelize, modelName: 'assignment', underscored: true });

Assignment.belongsTo(User);
Assignment.belongsTo(User, {
  as: 'AssignedTo',
  foreignKey: 'assignToUserId',
});
Assignment.belongsTo(PerformanceReview);

export default Assignment;
