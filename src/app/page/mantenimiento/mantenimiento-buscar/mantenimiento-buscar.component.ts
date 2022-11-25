import { Mantenimiento } from './../../../model/mantenimiento';
import { MantenimientoService } from './../../../service/mantenimiento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenimiento-buscar',
  templateUrl: './mantenimiento-buscar.component.html',
  styleUrls: ['./mantenimiento-buscar.component.css']
})
export class MantenimientoBuscarComponent implements OnInit {

  constructor(private MantenimientoService: MantenimientoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Mantenimiento[] = [];
    this.MantenimientoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nmantenimiento.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.MantenimientoService.setLista(array);
    })
  }
}
