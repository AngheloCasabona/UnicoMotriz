import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DetalleVenta } from 'src/app/model/detalleventa';
import { DetalleVentaService } from 'src/app/service/detalleventa.service';
import { DetalleVentaDialogoComponent } from './detalleventa-dialogo/detalleventa-dialogo.component';

@Component({
  selector: 'app-detalleventa-listar',
  templateUrl: './detalleventa-listar.component.html',
  styleUrls: ['./detalleventa-listar.component.css']
})
export class DetalleVentaListarComponent implements OnInit {

  lista: DetalleVenta[]=[];
    dataSource:MatTableDataSource<DetalleVenta>=new MatTableDataSource();
  displayedColumns:string[]=['cdetalle','cliente','taller', 'cfactura', 'tdetalle', 'acciones','acciones2'];
  private idMayor: number = 0;

  constructor(private dvs: DetalleVentaService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dvs.listar().subscribe(data=>{this.lista=data; this.dataSource=new MatTableDataSource (data); })
    this.dvs.getLista().subscribe(data => {this.dataSource = new MatTableDataSource(data);});
    this.dvs.getConfirmaEliminacion().subscribe(data => { data == true? this.eliminar(this.idMayor) : false; });
}

confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(DetalleVentaDialogoComponent);
}
eliminar(id: number) {
  this.dvs.eliminar(id).subscribe(() => {
    this.dvs.listar().subscribe(data => {
      this.dvs.setLista(data);/* se ejecuta la línea 27*/
    });
  });

}
}