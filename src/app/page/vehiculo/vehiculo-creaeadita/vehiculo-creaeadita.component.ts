import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Vehiculo } from 'src/app/model/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-vehiculo-creaeadita',
  templateUrl: './vehiculo-creaeadita.component.html',
  styleUrls: ['./vehiculo-creaeadita.component.css']
})
export class VehiculoCreaeaditaComponent implements OnInit {
  vehiculo:Vehiculo=new Vehiculo();
  mensaje:string="";
  edicion:boolean=false;
  id:number=0;

  constructor(private vehiculoService:VehiculoService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.vehiculo.cVehiculo.length > 0 && this.vehiculo.nMarca.length > 0) {
      if (this.edicion) {
      this.vehiculoService.modificar(this.vehiculo).subscribe(data => {
        this.vehiculoService.listar().subscribe(data => {
          this.vehiculoService.setLista(data);
        })
      })

    } else {

      this.vehiculoService.insertar(this.vehiculo).subscribe(data => {
        this.vehiculoService.listar().subscribe(data => {
          this.vehiculoService.setLista(data);
        })
      })
    }

      this.router.navigate(['mecanicos']);
    } else {

      this.mensaje = "Complete los valores requeridos";

    }
  }
  init() {
    if (this.edicion) {
      this.vehiculoService.listarId(this.id).subscribe(data => {
        this.vehiculo = data;
      })
    }

  }
}
