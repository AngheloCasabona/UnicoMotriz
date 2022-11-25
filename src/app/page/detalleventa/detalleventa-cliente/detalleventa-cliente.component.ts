import { Component, OnInit } from '@angular/core';
import { DetalleVenta } from 'src/app/model/detalleventa';
import { DetalleVentaService } from 'src/app/service/detalleventa.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-detalleventa-cliente',
  templateUrl: './detalleventa-cliente.component.html',
  styleUrls: ['./detalleventa-cliente.component.css']
})
export class DetalleventaClienteComponent implements OnInit {
  dataSource: MatTableDataSource<DetalleVenta> = new MatTableDataSource();
  displayedColumns: string[] = ['cdetalle','cliente','taller', 'cfactura', 'tdetalle'];
  constructor(private dvS:DetalleVentaService) { }

  ngOnInit(): void {
    this.dvS.buscarClienteDetalle().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
