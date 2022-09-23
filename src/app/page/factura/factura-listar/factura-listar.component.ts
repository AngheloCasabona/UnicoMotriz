import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Factura } from 'src/app/model/factura';
import { FacturaService } from 'src/app/service/factura.service';

@Component({
  selector: 'app-factura-listar',
  templateUrl: './factura-listar.component.html',
  styleUrls: ['./factura-listar.component.css']
})
export class FacturaListarComponent implements OnInit {

  dataSource:MatTableDataSource<Factura>=new MatTableDataSource();
  displayedColumns:string[]=['id','fecha', 'monto', 'acciones'];
  constructor(private fs: FacturaService) { }

  ngOnInit(): void {
    this.fs.listar().subscribe(data=>{this.dataSource=new MatTableDataSource (data); })
    this.fs.getLista().subscribe(data => {this.dataSource = new MatTableDataSource(data);
  });
}
}
