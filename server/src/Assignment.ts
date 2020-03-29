import { Model, DataTypes } from 'sequelize';
import sequelize from './App/Sequelize';
import User from './User';
import PerformanceReview from './PerformanceReview';

class Assignment extends Model {
  public id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Assignment.init(
  {
    score: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    feedback: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
  },
  { sequelize, modelName: 'performance_review', underscored: true }
);

Assignment.belongsTo(User);
Assignment.hasOne(User, {
  as: 'AssignedTo',
  foreignKey: 'assign_to_user_id',
  constraints: false,
});
Assignment.hasOne(PerformanceReview);

export default Assignment;
