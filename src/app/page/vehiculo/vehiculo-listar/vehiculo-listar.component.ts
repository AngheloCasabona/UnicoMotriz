import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { MatTableDataSource } from '@angular/material/table';
import { Vehiculo } from 'src/app/model/vehiculo';


@Component({
  selector: 'app-vehiculo-listar',
  templateUrl: './vehiculo-listar.component.html',
  styleUrls: ['./vehiculo-listar.component.css']
})
export class VehiculoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Vehiculo> = new MatTableDataSource();
  displayedColumns:string[]=['codeVehiculo', `DAno`, `cliente`, `NMarca`, `NModelo`];
  constructor(private vs:VehiculoService) { }

  ngOnInit(): void {
    this.vs.listar().subscribe(da=>{
      this.dataSource = new MatTableDataSource(da);
    })
  }

}
