import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export class Car extends Model<Car> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  brand: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  model: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  year: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  mileage: number;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  image: string[];
}
