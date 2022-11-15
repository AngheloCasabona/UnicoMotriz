import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Factura } from 'src/app/model/factura';
import { FacturaService } from 'src/app/service/factura.service';
import { MatDialog } from '@angular/material/dialog';
import { FacturaDialogoComponent } from './factura-dialogo/factura-dialogo.component';
@Component({
  selector: 'app-factura-listar',
  templateUrl: './factura-listar.component.html',
  styleUrls: ['./factura-listar.component.css']
})
export class FacturaListarComponent implements OnInit {
  lista: Factura[] = [];
  dataSource:MatTableDataSource<Factura>=new MatTableDataSource();
  displayedColumns:string[]=['cfactura','fecha', 'monto', 'acciones','acciones2'];
  private idMayor: number = 0;

  constructor(private fs: FacturaService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fs.listar().subscribe(data=>{this.lista=data; this.dataSource = new MatTableDataSource (data); })
    this.fs.getLista().subscribe(data => {this.dataSource = new MatTableDataSource(data);});
    this.fs.getConfirmaEliminacion().subscribe(data => { data == true? this.eliminar(this.idMayor) : false; });
}

confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(FacturaDialogoComponent);
}
eliminar(id: number) {
  this.fs.eliminar(id).subscribe(() => {
    this.fs.listar().subscribe(data => {
      this.fs.setLista(data);
    });
  });
}
}
