import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { MatTableDataSource } from "@angular/material/table";
@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  dataSource:MatTableDataSource<Cliente>=new MatTableDataSource();
  displayedColumns: string[]=['id', 'nameCliente', 'emailCliente', 'claveCliente', 'telefonoCliente', 'vehiculoCliente'];
  constructor(private ps:ClienteService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
