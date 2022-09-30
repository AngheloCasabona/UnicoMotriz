import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../model/cliente';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url:string = "http://localhost:5000/clientes";
  private listaCambio = new Subject<Cliente[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Cliente[]>(this.url);
  }
  insertar(cliente: Cliente){
    return this.http.post(this.url, cliente);
  }
  setLista(ListaNueva: Cliente[]){
    this.listaCambio.next(ListaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificar(cliente: Cliente) {
    return this.http.put(this.url + "/" + cliente.id, cliente);
  }
  listarId(id: number) {
    return this.http.get<Cliente>(`${this.url}/${id}`);
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
}
