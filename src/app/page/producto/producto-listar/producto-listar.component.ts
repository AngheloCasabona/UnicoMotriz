import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/model/taller';
import { ProductoService } from 'src/app/service/taller.service';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  dataSource:MatTableDataSource<Taller>=new MatTableDataSource();
  displayedColumns:string[]=['id','name', 'address'];
  constructor(private ps: ProductoService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{this.dataSource=new MatTableDataSource (data); })
  }
}
