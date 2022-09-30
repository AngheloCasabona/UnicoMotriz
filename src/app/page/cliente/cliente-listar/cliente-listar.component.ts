import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from '@angular/material/dialog';
import { ClienteDialogoComponent } from './cliente-dialogo/cliente-dialogo.component';
@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  dataSource:MatTableDataSource<Cliente>=new MatTableDataSource();
  displayedColumns: string[]=['id', 'nameCliente', 'emailCliente', 'claveCliente', 'telefonoCliente', 'rucCliente', 'accion1', 'accion2'];
  private idMayor: number = 0;
  constructor(private ps:ClienteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data=>{
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number){
    this.idMayor = id;
    this.dialog.open(ClienteDialogoComponent);
  }

  eliminar(id: number){
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      });
    });
  }

}
