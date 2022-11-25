import { DetalleVenta } from './../../../model/detalleventa';
import { Component, OnInit } from '@angular/core';
import { DetalleVentaService } from 'src/app/service/detalleventa.service';
@Component({
  selector: 'app-detalleventa-buscar',
  templateUrl: './detalleventa-buscar.component.html',
  styleUrls: ['./detalleventa-buscar.component.css']
})
export class DetalleventaBuscarComponent implements OnInit {
textoBuscar: string="";
  constructor(private detalleService:DetalleVentaService) { }

  ngOnInit(): void {
  }
  buscar(dv:any){

    let array: DetalleVenta[] = [];
    this.detalleService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.cliente.ncliente.includes(dv.target.value)) {
          array.push(data[index]);
        }
      });
      this.detalleService.setLista(array);
    })
  }

}

