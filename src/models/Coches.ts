import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Coche extends Model {
  public modelo!: string;
  public color!: string;
  public pvc!: string;

}

export interface CocheI {
    modelo: string;
    color: string;
    pvc: string;
}

Coche.init(
  {
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pvc: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
  },
  {
    tableName: "coche",
    sequelize: database,
    timestamps: true
  }
);
