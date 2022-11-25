import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Taller } from 'src/app/model/taller';
import { TallerService } from 'src/app/service/taller.service';

@Component({
  selector: 'app-taller-direccion',
  templateUrl: './taller-direccion.component.html',
  styleUrls: ['./taller-direccion.component.css']
})
export class TallerDireccionComponent implements OnInit {
  dataSource: MatTableDataSource<Taller> = new MatTableDataSource();
  displayedColumns: string[] = ['ctaller', 'direccion'];
  constructor(private tS:TallerService) { }

  ngOnInit(): void {
    this.tS.buscarDireccion().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
}
