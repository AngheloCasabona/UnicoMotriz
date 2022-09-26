import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/model/producto';
import { MatDialog } from '@angular/material/dialog';
import { ProductoDialogoComponent } from './producto-dialogo/producto-dialogo.component';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  displayedColumns:string[]=['id', `nameProducto`, `costoProducto`, `ventaProducto`,'accion1','accion2'];
  private idMayor: number = 0;
  constructor(private vs:ProductoService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.vs.listar().subscribe(da=>{
      this.dataSource = new MatTableDataSource(da);
    }),
    this.vs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
  });
  this.vs.getConfirmaEliminacion().subscribe(data => {
    data == true ? this.eliminar(this.idMayor) : false;
  });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ProductoDialogoComponent);
  }
  eliminar(id: number) {
    this.vs.eliminar(id).subscribe(() => {
      this.vs.listar().subscribe(data => {
        this.vs.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }
}
