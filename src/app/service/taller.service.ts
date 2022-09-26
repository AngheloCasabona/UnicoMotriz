import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Taller } from '../model/taller';

@Injectable({
  providedIn: 'root'
})
export class TallerService {
  url: string = "http://localhost:5000/talleres";
  constructor(private http: HttpClient) { }
  listar(){
    return this.http.get<Taller[]>(this.url);

  }
}
