
import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Marca, MarcaI } from '../models/Marca';

export class MarcaController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para marca')
        } catch (error) {

        }
    }

    public async getAllMarca(req: Request, res:Response){
        try {
            const marca: MarcaI[] = await Marca.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from marca;
            res.status(200).json({marca})
        } catch (error) {

        }
    }
}
