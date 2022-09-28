import { Request, Response, Application, Router } from "express";

import { MarcaController } from '../controllers/marca.controller';

export class MarcaRoutes {
    public marcaController: MarcaController =  new MarcaController();

    public routes(app: Application): void {
        app.route("/marca/test").get(this.marcaController.test)
        app.route("/marca").get(this.marcaController.getAllMarca)
    }
}
