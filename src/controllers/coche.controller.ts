import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Coche, CocheI } from '../models/Coches';

export class CocheController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para coches')
        } catch (error) {

        }
    }

    public async getAllCoche(req: Request, res:Response){
        try {
            const coche: CocheI[] = await Coche.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from coches;
            res.status(200).json({coche})
        } catch (error) {

        }
    }
}
