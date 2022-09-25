import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { Taller } from '../model/taller';

@Injectable({
  providedIn: 'root'
})
export class TallerService {
  url: string = "http://localhost:5000/talleres";
  private listaCambio = new Subject<Taller[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Taller[]>(this.url);
  }
  insertar(taller: Taller) {
    return this.http.post(this.url, taller);
  }
  setLista(listaNueva: Taller[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(taller: Taller) {
    return this.http.put(this.url + "/" + taller.id, taller);
  }
  listarId(id: number) {
    return this.http.get<Taller>(`${this.url}/${id}`);
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


  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Taller[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
