import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  url:string="http://localhost:8080/reserva";
  //private url: string = `${environment.host}/reserva`
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Reserva[]>(this.url);
  }
}
