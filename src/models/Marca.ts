import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Marca extends Model {
  public descripcion!: string;
  

}

export interface MarcaI {
    descripcion: string;
    
}

Marca.init(
  {
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      }
  },
  {
    tableName: "marca",
    sequelize: database,
    timestamps: true
  }
);
