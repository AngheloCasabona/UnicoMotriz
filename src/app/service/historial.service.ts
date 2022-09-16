import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historial } from '../model/historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  url: string = "http://localhost:5000/historial";
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Historial[]>(this.url);
  }
}
