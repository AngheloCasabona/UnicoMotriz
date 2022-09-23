import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../model/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  url:string="http://localhost:5000/vehiculos";
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Vehiculo[]>(this.url);
  }
}
