import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/model/producto';


@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  displayedColumns:string[]=['id', `nameProducto`, `costoProducto`, `ventaProducto`];
  constructor(private vs:ProductoService) { }

  ngOnInit(): void {
    this.vs.listar().subscribe(da=>{
      this.dataSource = new MatTableDataSource(da);
    })
  }

}
