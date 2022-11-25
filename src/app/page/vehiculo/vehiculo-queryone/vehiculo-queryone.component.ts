import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaClienteVehiculo } from 'src/app/model/RespuestaClienteVehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-vehiculo-queryone',
  templateUrl: './vehiculo-queryone.component.html',
  styleUrls: ['./vehiculo-queryone.component.css']
})
export class VehiculoQueryoneComponent implements OnInit {
  dataSource: MatTableDataSource<RespuestaClienteVehiculo> = new MatTableDataSource();
  displayedColumns: string[] = ['cplaca', 'ccliente'];
  constructor(private vS:VehiculoService) { }

  ngOnInit(): void {
    this.vS.buscarPlacaCliente().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
