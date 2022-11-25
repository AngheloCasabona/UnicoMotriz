import { EMPTY, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personalizacion } from '../model/personalizacion';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalizacionService {
  url:string = "http://localhost:8080/personalizaciones";

  private listaCambio = new Subject<Personalizacion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar (){
    return this.http.get<Personalizacion[]>(this.url);
  }

  insertar(personalizacion: Personalizacion) {
    return this.http.post(this.url, personalizacion);
  }
  setLista(listaNueva: Personalizacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(personalizacion: Personalizacion) {
    return this.http.put(this.url + "/" + personalizacion.cpersonalizacion, personalizacion);
  }
  listarId(id: number) {
    return this.http.get<Personalizacion>(`${this.url}/${id}`);
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
      return this.http.post<Personalizacion[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }




}
