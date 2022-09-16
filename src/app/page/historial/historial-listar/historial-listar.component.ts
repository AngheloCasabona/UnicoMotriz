import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Historial } from 'src/app/model/historial';
import { HistorialService } from 'src/app/service/historial.service';

@Component({
  selector: 'app-historial-listar',
  templateUrl: './historial-listar.component.html',
  styleUrls: ['./historial-listar.component.css']
})
export class HistorialListarComponent implements OnInit {
  dataSource: MatTableDataSource<Historial> = new MatTableDataSource();
  displayedColumns:string[]=['Historial','Descripcion','Reserva'];
  constructor(private Hs: HistorialService) { }

  ngOnInit(): void {
    this.Hs.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
