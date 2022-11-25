import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
@Component({
  selector: 'app-cliente-queryone',
  templateUrl: './cliente-queryone.component.html',
  styleUrls: ['./cliente-queryone.component.css']
})
export class ClienteQueryoneComponent implements OnInit {
  dataSource: MatTableDataSource<Cliente> = new MatTableDataSource();
  displayedColumns: string[] = ['cliente', 'contraseña'];
  constructor(private cS:ClienteService) { }

  ngOnInit(): void {
    this.cS.fuerzaCodigo().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
