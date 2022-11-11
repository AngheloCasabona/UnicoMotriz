import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { MatTableDataSource } from '@angular/material/table';
import { Vehiculo } from 'src/app/model/vehiculo';
import { MatDialog } from '@angular/material/dialog';
import { VehiculoDialogoComponent } from './vehiculo-dialogo/vehiculo-dialogo.component';


@Component({
  selector: 'app-vehiculo-listar',
  templateUrl: './vehiculo-listar.component.html',
  styleUrls: ['./vehiculo-listar.component.css']
})
export class VehiculoListarComponent implements OnInit {
  lista: Vehiculo[] = [];
  dataSource: MatTableDataSource<Vehiculo> = new MatTableDataSource();
  displayedColumns:string[]=['cVehiculo', 'tDetalle', `dAno`, `nMarca`, `nModelo`, `cliente`];
  private idMayor: number = 0;
  constructor(private Vc: VehiculoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Vc.listar().subscribe(data => {
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);});

    this.Vc.getLista().subscribe(data=> {this.dataSource = new MatTableDataSource(data);
    console.log(data);
    });
    this.Vc.getConfirmaEliminacion().subscribe(data => {
       data == true ? this.eliminar(this.idMayor) : false; });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(VehiculoDialogoComponent );
  }


  eliminar(id: number) {
    this.Vc.eliminar(id).subscribe(() => {
      this.Vc.listar().subscribe(data => {
        this.Vc.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }
}
