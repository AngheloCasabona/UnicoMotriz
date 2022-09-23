import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Taller } from 'src/app/model/taller';
import { TallerService } from 'src/app/service/taller.service';

@Component({
  selector: 'app-taller-listar',
  templateUrl: './taller-listar.component.html',
  styleUrls: ['./taller-listar.component.css']
})
export class TallerListarComponent implements OnInit {
  dataSource:MatTableDataSource<Taller>=new MatTableDataSource();
  displayedColumns:string[]=['id','name', 'address', 'acciones'];
  constructor(private ps: TallerService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{this.dataSource=new MatTableDataSource (data); })
    this.ps.getLista().subscribe(data => {this.dataSource = new MatTableDataSource(data);
  });
}
}
