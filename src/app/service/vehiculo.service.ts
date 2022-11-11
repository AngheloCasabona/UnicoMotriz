import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { Vehiculo } from '../model/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  url:string="http://localhost:8080/vehiculos";
  //private url: string = `${environment.host}/vehiculos`
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Vehiculo[]>(this.url);
  }
}
