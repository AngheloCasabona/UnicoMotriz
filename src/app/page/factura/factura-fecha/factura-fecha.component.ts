import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/service/factura.service';
import { Factura } from 'src/app/model/factura';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-factura-fecha',
  templateUrl: './factura-fecha.component.html',
  styleUrls: ['./factura-fecha.component.css']
})
export class FacturaFechaComponent implements OnInit {
  dataSource: MatTableDataSource<Factura> = new MatTableDataSource();
  displayedColumns: string[] = ['cfactura', 'fecha'];
  constructor(private fS:FacturaService) { }

  ngOnInit(): void {
    this.fS.buscarFecha().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
