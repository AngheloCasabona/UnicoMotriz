import { Mecanico } from './mecanico';
import { Vehiculo } from './vehiculo';
export class Mantenimiento{
    cmantenimiento: number = 0;
    nmantenimiento: string = "";
    m_costo: number = 0;
    cvehiculo: Vehiculo = new Vehiculo();
    cmecanico: Mecanico = new Mecanico();
}