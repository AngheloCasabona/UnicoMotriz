import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { Vehiculo } from 'src/app/model/vehiculo';
import { ClienteService } from 'src/app/service/cliente.service';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import * as moment from 'moment';

@Component({
  selector: 'app-vehiculo-creaedita',
  templateUrl: './vehiculo-creaedita.component.html',
  styleUrls: ['./vehiculo-creaedita.component.css']
})
export class VehiculoCreaeditaComponent implements OnInit {
  vehiculo: Vehiculo = new Vehiculo();
  id: number = 0;
  edicion: boolean = false;
  listaClientes: Cliente[] = [];
  idClienteSeleccionado: number = 0;
  fechaSeleccionada: Date = moment().add(-1, 'days').toDate();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  mensaje1: string = "";
  constructor(private vehiculoService:VehiculoService, private router:Router, private route:ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.clienteService.listar().subscribe(data => { this.listaClientes = data });
  }
  aceptar(): void {
    if (this.vehiculo.cplaca.length > 0 &&
      this.idClienteSeleccionado>0) {
      let c = new Cliente();
      c.ccliente = this.idClienteSeleccionado;
      this.vehiculo.cliente = c;
      this.vehiculo.dano = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
      if (this.edicion) {
        this.vehiculoService.modificar(this.vehiculo).subscribe(() => {
          this.vehiculoService.listar().subscribe(data => {
            this.vehiculoService.setLista(data);
          });
        });

      } else {
        this.vehiculoService.insertar(this.vehiculo).subscribe(() => {
          this.vehiculoService.listar().subscribe(data => {
            this.vehiculoService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['vehiculos']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.vehiculoService.listarId(this.id).subscribe(data => {
        this.vehiculo = data
        console.log(data);
        this.idClienteSeleccionado = data.cliente.ccliente;
      });

    }

  }

}
