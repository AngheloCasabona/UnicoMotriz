import { Factura } from './../model/factura';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  url: string = "http://localhost:5000/facturas";
  private listaCambio = new Subject<Factura[]>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Factura[]>(this.url);
  }
  insertar(factura: Factura) {
    return this.http.post(this.url, factura);
  }
  setLista(listaNueva: Factura[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(factura: Factura) {
    return this.http.put(this.url + "/" + factura.id,factura);
  }
  listarId(id: number) {
    return this.http.get<Factura>(`${this.url}/${id}`);
  }
}
