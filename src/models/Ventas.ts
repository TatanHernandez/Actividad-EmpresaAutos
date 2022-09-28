import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Venta extends Model {
  public totalPagar!: number;
  public fecha!:Date;
  
}

export interface VentaI {
   totalPagar: number;
   fecha: Date;
}

Venta.init(
  {
    totalPagar: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false
      }
  },
  {
    tableName: "ventas",
    sequelize: database,
    timestamps: true
  }
);
