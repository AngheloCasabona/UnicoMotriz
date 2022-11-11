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
  displayedColumns:string[]=['id','name', 'address','ruc', 'modify','delete'];
  private idMayor: number = 0;
  constructor(private tallerService: TallerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tallerService.listar().subscribe(data=>{this.dataSource=new MatTableDataSource (data); })
    this.tallerService.getLista().subscribe(data => {this.dataSource = new MatTableDataSource(data); });
    this.tallerService.getConfirmaEliminacion().subscribe(data => { data == true ? this.eliminar(this.idMayor) : false; });
}
confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(TallerDialogoComponent);
}


eliminar(id: number) {
  this.tallerService.eliminar(id).subscribe(() => {
    this.tallerService.listar().subscribe(data => {
      this.tallerService.setLista(data);/* se ejecuta la línea 27*/
    });
  });

}

}
