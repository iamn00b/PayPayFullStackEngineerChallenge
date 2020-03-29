import { Model, DataTypes } from 'sequelize';
import sequelize from './App/Sequelize';
import User from './User';

class PerformanceReview extends Model {
  public id!: number;
  public score!: number;
  public feedback!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PerformanceReview.init(
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

PerformanceReview.belongsTo(User);
PerformanceReview.belongsTo(User, { as: 'Writer', foreignKey: 'writer_id' });

export default PerformanceReview;
