import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Vehiculo } from '../model/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  //private url: string = `${environment.host}/vehiculos`
  url:string="http://localhost:8080/vehiculos";
  private listaCambio = new Subject<Vehiculo[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Vehiculo[]>(this.url);
  }

  insertar(vehiculo: Vehiculo) {
    return this.http.post(this.url, vehiculo);
  }

  modificar(vehiculo: Vehiculo) {
    return this.http.put(this.url, vehiculo);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(texto: string) {
    return this.http.post<Vehiculo[]>(`${this.url}/buscar`, texto);
  }

  listarId(id: number) {
    return this.http.get<Vehiculo>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Vehiculo[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

}
