import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/model/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-vehiculo-buscar',
  templateUrl: './vehiculo-buscar.component.html',
  styleUrls: ['./vehiculo-buscar.component.css']
})
export class VehiculoBuscarComponent implements OnInit {
  textoBuscar: String = "";
  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
  }
  buscar(v: any) {
    // let array: Vehiculo[] = [];
    // this.vehiculoService.listar().subscribe(data => {
    //   data.forEach((element, index) => {
    //     if (element.cvehiculo.includes(e.target.value)) {
    //       array.push(data[index]);
    //     }
    //   });
    //   this.vehiculoService.setLista(array);
    // })

    let array: Vehiculo[] = [];
    this.vehiculoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.cplaca.includes(v.target.value)) {
          array.push(data[index]);
        }
      });
      this.vehiculoService.setLista(array);
    })
  }
}
