import { DetalleVenta } from './../model/detalleventa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {
    url: string = "http://localhost:8080/detalleventa";
  private listaCambio = new Subject<DetalleVenta[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  
  listar(){
    return this.http.get<DetalleVenta[]>(this.url);
  }
  
  insertar(detalleventa: DetalleVenta) {
    return this.http.post(this.url, detalleventa);
  }
  setLista(listaNueva: DetalleVenta[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(detalleventa: DetalleVenta) {
    return this.http.put(this.url, detalleventa);
  }
  buscar(texto: string) {

    return this.http.post<DetalleVenta[]>(`${this.url}/buscar`, texto);
  }
  listarId(id: number) {
    return this.http.get<DetalleVenta>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

  buscarClienteDetalle(){
    return this.http.get<DetalleVenta[]>(`${this.url}/buscarclientedetalle`);
  }
}