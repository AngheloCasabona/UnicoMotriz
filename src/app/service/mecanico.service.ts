import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mecanico } from '../model/mecanico';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {
  url:string = "http://localhost:5000/mecanicos";
  constructor(private http: HttpClient) { }
  listar (){
    return this.http.get<Mecanico[]>(this.url);
  }
}
