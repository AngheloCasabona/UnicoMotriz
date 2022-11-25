import { MantenimientoService } from './../../../service/mantenimiento.service';
import { Mantenimiento } from './../../../model/mantenimiento';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MantenimientoDialogoComponent } from './mantenimiento-dialogo/mantenimiento-dialogo.component';

@Component({
  selector: 'app-mantenimiento-listar',
  templateUrl: './mantenimiento-listar.component.html',
  styleUrls: ['./mantenimiento-listar.component.css']
})
export class MantenimientoListarComponent implements OnInit {
  lista: Mantenimiento[] = [];
  dataSource: MatTableDataSource<Mantenimiento> = new MatTableDataSource();
  displayedColumns:string[]=['id','name','costo','cvehiculo','cmecanico','Actualizar ','Eliminar'];
  private idMayor: number = 0;
  constructor(private Mc: MantenimientoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Mc.listar().subscribe(data => {
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);});

    this.Mc.getLista().subscribe(data=> {this.dataSource = new MatTableDataSource(data);
    console.log(data);
    });
    this.Mc.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false; });
}
confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(MantenimientoDialogoComponent);
}


eliminar(id: number) {
  this.Mc.eliminar(id).subscribe(() => {
    this.Mc.listar().subscribe(data => {
      this.Mc.setLista(data);/* se ejecuta la línea 27*/
    });
  });

}

}
