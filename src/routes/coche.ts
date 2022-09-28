import { Request, Response, Application, Router } from "express";

import { CocheController } from '../controllers/coche.controller';

export class CocheRoutes {
    public cocheController: CocheController =  new CocheController();

    public routes(app: Application): void {
        app.route("/coches/test").get(this.cocheController.test)
        app.route("/coches").get(this.cocheController.getAllCoche)
    }
}
