import { Taller } from 'src/app/model/taller';
import { Cliente } from 'src/app/model/cliente';
import { Factura } from 'src/app/model/factura';

export class DetalleVenta{
  ccliente: Cliente =new Cliente();
  ctaller: Taller= new Taller();
  cfactura: Factura = new Factura();
  tdetalle: string="";
}