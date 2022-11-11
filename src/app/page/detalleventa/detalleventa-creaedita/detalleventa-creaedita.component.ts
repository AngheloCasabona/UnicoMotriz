import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DetalleVenta } from 'src/app/model/detalleventa';
import { DetalleVentaService } from 'src/app/service/detalleventa.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { FacturaService } from 'src/app/service/factura.service';
import { TallerService } from 'src/app/service/taller.service';
import { Cliente } from 'src/app/model/cliente';
import { Taller } from 'src/app/model/taller';
import { Factura } from 'src/app/model/factura';

@Component({
  selector: 'app-detalleventa-creaedita',
  templateUrl: './detalleventa-creaedita.component.html',
  styleUrls: ['./detalleventa-creaedita.component.css']
})
export class DetalleVentaCreaeditaComponent implements OnInit {

  detalleventa: DetalleVenta= new DetalleVenta();
  mensaje: string = "";
  edicion: boolean = false;
  listaCliente: Cliente[]=[];
  listaTaller: Taller[]=[];
  listaFactura: Factura[]=[];
  idCliente: number=0;
  idTaller: number=0;
  idFactura: number=0;
  id: number = 0;
  mensaje1: string="";

  constructor(private detalleventaService : DetalleVentaService,private router: Router,private route: ActivatedRoute, private clienteService: ClienteService, private tallerService: TallerService, private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.clienteService.listar().subscribe(data => { this.listaCliente = data });
    this.tallerService.listar().subscribe(data => { this.listaTaller = data });
    this.facturaService.listar().subscribe(data => { this.listaFactura = data });
  }
  aceptar(): void {

    if (this.idCliente > 0 && this.idTaller >0 && this.idFactura) {
      let dv = new Cliente();
      dv.id= this.idCliente;
      this.detalleventa.ccliente=dv;
      if (this.edicion) {
      this.detalleventaService.modificar(this.detalleventa).subscribe(data => {
        this.detalleventaService.listar().subscribe(data => {
          this.detalleventaService.setLista(data);
        })
      })

    } else {

      this.detalleventaService.insertar(this.detalleventa).subscribe(data => {
        this.detalleventaService.listar().subscribe(data => {
          this.detalleventaService.setLista(data);
        })
      })
    }


      this.router.navigate(['detalleventa']);
    } else {

      this.mensaje = "Complete los valores requeridos";

    }
  }
  init() {
    if (this.edicion) {
      this.detalleventaService.listarId(this.id).subscribe(data => {
        this.detalleventa = data;
      })
    }

  }
}
