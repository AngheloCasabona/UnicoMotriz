import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reserva } from 'src/app/model/reserva';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-reserva-listar',
  templateUrl: './reserva-listar.component.html',
  styleUrls: ['./reserva-listar.component.css']
})
export class ReservaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Reserva> = new MatTableDataSource();
  displayedColumns:string[]=['reserva','detalle','factura'];
  constructor(private Rs: ReservaService) { }

  ngOnInit(): void {
    this.Rs.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
