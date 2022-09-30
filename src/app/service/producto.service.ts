import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url: string = "http://localhost:5000/talleres";
  constructor(private http: HttpClient) { }
  this.clienteService.modificar(this.cliente).subscribe(data => {
  this.clienteService.listar().subscribe(data => {
  this.clienteService.setLista(data);
  private confirmaEliminacion = new Subject<Boolean>()
    
  listar() {
    return this.http.get<Producto[]>(this.url);
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

}
