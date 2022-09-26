import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../model/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url:string = "http://localhost:5000/clientes";
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Cliente[]>(this.url);
  }
}
