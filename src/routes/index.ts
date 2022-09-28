import { ClienteRoutes } from './cliente';
import { CocheRoutes } from './coche';
import { MarcaRoutes } from './marca';
import { VentaRoutes } from './venta';

export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public cocheRoutes: CocheRoutes = new CocheRoutes();
    public marcaRoutes: MarcaRoutes = new MarcaRoutes();
    public ventaRoutes: VentaRoutes = new VentaRoutes();
}
