import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Mecanico } from 'src/app/model/mecanico';
import { MecanicoService } from 'src/app/service/mecanico.service';
import { MecanicoDialogoComponent } from './mecanico-dialogo/mecanico-dialogo.component';
@Component({
  selector: 'app-mecanico-listar',
  templateUrl: './mecanico-listar.component.html',
  styleUrls: ['./mecanico-listar.component.css']
})
export class MecanicoListarComponent implements OnInit {
  lista: Mecanico[] = [];
  dataSource: MatTableDataSource<Mecanico> = new MatTableDataSource();
  displayedColumns:string[]=['id','name','email','clave','taller','Actualizar ','Eliminar'];
  private idMayor: number = 0;
  constructor(private Mc: MecanicoService, private dialog: MatDialog) { }

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
  this.dialog.open(MecanicoDialogoComponent );
}


eliminar(id: number) {
  this.Mc.eliminar(id).subscribe(() => {
    this.Mc.listar().subscribe(data => {
      this.Mc.setLista(data);/* se ejecuta la línea 27*/
    });
  });

}

}
