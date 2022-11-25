import { PersonalizacionDialogoComponent } from './personalizacion-dialogo/personalizacion-dialogo.component';
import { PersonalizacionService } from './../../../service/personalizacion.service';
import { Personalizacion } from './../../../model/personalizacion';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-personalizacion-listar',
  templateUrl: './personalizacion-listar.component.html',
  styleUrls: ['./personalizacion-listar.component.css']
})
export class PersonalizacionListarComponent implements OnInit {

  lista: Personalizacion[] = [];
  dataSource: MatTableDataSource<Personalizacion> = new MatTableDataSource();
  displayedColumns:string[]=['id','name','costo','cvehiculo','cmecanico','Actualizar ','Eliminar'];
  private idMayor: number = 0;
  constructor(private Pc: PersonalizacionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Pc.listar().subscribe(data => {
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);});

    this.Pc.getLista().subscribe(data=> {this.dataSource = new MatTableDataSource(data);
    console.log(data);
    });
    this.Pc.getConfirmaEliminacion().subscribe(data => {
       data == true ? this.eliminar(this.idMayor) : false; });
}
confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(PersonalizacionDialogoComponent );
}


eliminar(id: number) {
  this.Pc.eliminar(id).subscribe(() => {
    this.Pc.listar().subscribe(data => {
      this.Pc.setLista(data);/* se ejecuta la línea 27*/
    });
  });

}

}
