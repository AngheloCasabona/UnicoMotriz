import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Mecanico } from 'src/app/model/mecanico';
import { MecanicoService } from 'src/app/service/mecanico.service';

@Component({
  selector: 'app-mecanico-listar',
  templateUrl: './mecanico-listar.component.html',
  styleUrls: ['./mecanico-listar.component.css']
})
export class MecanicoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Mecanico> = new MatTableDataSource();
  displayedColumns:string[]=['id','name','email','password','taller'];
  constructor(private Mc: MecanicoService) { }

  ngOnInit(): void {
    this.Mc.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
