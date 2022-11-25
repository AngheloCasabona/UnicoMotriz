import { Component, OnInit } from '@angular/core';
import { Mecanico } from 'src/app/model/mecanico';
import { MecanicoService } from 'src/app/service/mecanico.service';

@Component({
  selector: 'app-mecanico-buscar',
  templateUrl: './mecanico-buscar.component.html',
  styleUrls: ['./mecanico-buscar.component.css']
})
export class MecanicoBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private mecanicoService: MecanicoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Mecanico[] = [];
    this.mecanicoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nmecanico.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.mecanicoService.setLista(array);
    })
  }

}
