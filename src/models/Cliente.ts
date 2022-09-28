import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Cliente extends Model {
  public nombreCliente!: string;
  public apellidosCliente!: string;
  public direccionCliente!: string;
  public ciudadCliente!: string;
  public codCliente!: string;

}

export interface ClienteI {
    nombreCliente: string;
    apellidosCliente: string;
    direccionCliente: string;
    ciudadCliente: string;
    codCliente: string;
}

Cliente.init(
  {
    nombreCliente: {
        type: DataTypes.STRING,
        allowNull: false
      },
      apellidosCliente: {
        type: DataTypes.STRING,
        allowNull: false
      },
      direccionCliente: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      ciudadCliente: {
        type: DataTypes.STRING,
        allowNull: false
      },
      codCliente: {
        type: DataTypes.STRING,
        allowNull: false
      } 
  },
  {
    tableName: "clientes",
    sequelize: database,
    timestamps: true
  }
);
