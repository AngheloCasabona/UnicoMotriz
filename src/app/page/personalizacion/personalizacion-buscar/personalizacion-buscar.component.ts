import { Personalizacion } from './../../../model/personalizacion';
import { PersonalizacionService } from './../../../service/personalizacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalizacion-buscar',
  templateUrl: './personalizacion-buscar.component.html',
  styleUrls: ['./personalizacion-buscar.component.css']
})
export class PersonalizacionBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private PersonalizacionService : PersonalizacionService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Personalizacion[] = [];
    this.PersonalizacionService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.npersonalizacion.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.PersonalizacionService.setLista(array);
    })
  }
}
