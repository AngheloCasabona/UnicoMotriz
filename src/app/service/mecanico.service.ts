import { EMPTY, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mecanico } from '../model/mecanico';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {
  url:string = "http://localhost:8080/mecanicos";
  //private url: string = `${environment.host}/mecanicos`
  private listaCambio = new Subject<Mecanico[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar (){
    return this.http.get<Mecanico[]>(this.url);
  }

  insertar(mecanico: Mecanico) {
    return this.http.post(this.url, mecanico);
  }
  setLista(listaNueva: Mecanico[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(mecanico: Mecanico) {
    return this.http.put(this.url + "/" + mecanico.cmecanico, mecanico);
  }
  listarId(id: number) {
    return this.http.get<Mecanico>(`${this.url}/${id}`);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }


  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Mecanico[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }




}
