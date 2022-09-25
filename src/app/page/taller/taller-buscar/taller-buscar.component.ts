import { Component, OnInit } from '@angular/core';
import { Taller } from 'src/app/model/taller';
import { TallerService } from 'src/app/service/taller.service';

@Component({
  selector: 'app-taller-buscar',
  templateUrl: './taller-buscar.component.html',
  styleUrls: ['./taller-buscar.component.css']
})
export class TallerBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private tallerService: TallerService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Taller[] = [];
    this.tallerService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nameTaller.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.tallerService.setLista(array);
    })
  }

}
