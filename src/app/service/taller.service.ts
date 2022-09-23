import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Taller } from '../model/taller';

@Injectable({
  providedIn: 'root'
})
export class TallerService {
  url: string = "http://localhost:5000/talleres";
  private listaCambio = new Subject<Taller[]>()
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
}
