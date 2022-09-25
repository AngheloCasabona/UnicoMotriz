import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Taller } from 'src/app/model/taller';
import { TallerService } from 'src/app/service/taller.service';
import { TallerDialogoComponent } from './taller-dialogo/taller-dialogo.component';

@Component({
  selector: 'app-taller-listar',
  templateUrl: './taller-listar.component.html',
  styleUrls: ['./taller-listar.component.css']
})
export class TallerListarComponent implements OnInit {
  dataSource:MatTableDataSource<Taller>=new MatTableDataSource();
  displayedColumns:string[]=['id','name', 'address', 'acciones','acciones2'];
  private idMayor: number = 0;
  constructor(private ps: TallerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{this.dataSource=new MatTableDataSource (data); })
    this.ps.getLista().subscribe(data => {this.dataSource = new MatTableDataSource(data); });
    this.ps.getConfirmaEliminacion().subscribe(data => { data == true ? this.eliminar(this.idMayor) : false; });
}
confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(TallerDialogoComponent);
}


eliminar(id: number) {
  this.ps.eliminar(id).subscribe(() => {
    this.ps.listar().subscribe(data => {
      this.ps.setLista(data);/* se ejecuta la línea 27*/
    });
  });

}

}
