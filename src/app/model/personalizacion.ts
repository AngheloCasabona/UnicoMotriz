import { Mecanico } from './mecanico';
import { Vehiculo } from './vehiculo';
export class Personalizacion{
    cpersonalizacion: number = 0;
    npersonalizacion: string = "";
    m_costo: number = 0;
    cvehiculo: Vehiculo = new Vehiculo();
    cmecanico: Mecanico = new Mecanico();
}