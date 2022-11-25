import { EMPTY, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mantenimiento } from '../model/mantenimiento';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
  url:string = "http://localhost:8080/mantenimientos";

  private listaCambio = new Subject<Mantenimiento[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar (){
    return this.http.get<Mantenimiento[]>(this.url);
  }

  insertar(mantenimiento: Mantenimiento) {
    return this.http.post(this.url, mantenimiento);
  }
  setLista(listaNueva: Mantenimiento[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(mantenimiento: Mantenimiento) {
    return this.http.put(this.url, mantenimiento);
  }
  listarId(id: number) {
    return this.http.get<Mantenimiento>(`${this.url}/${id}`);
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
      return this.http.post<Mantenimiento[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }




}
