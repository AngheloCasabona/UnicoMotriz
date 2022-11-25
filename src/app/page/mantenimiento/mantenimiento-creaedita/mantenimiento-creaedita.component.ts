import { MecanicoService } from './../../../service/mecanico.service';
import { Mecanico } from './../../../model/mecanico';
import { VehiculoService } from './../../../service/vehiculo.service';
import { Vehiculo } from './../../../model/vehiculo';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Mantenimiento } from 'src/app/model/mantenimiento';
import { MantenimientoService } from 'src/app/service/mantenimiento.service';
@Component({
  selector: 'app-mantenimiento-creaedita',
  templateUrl: './mantenimiento-creaedita.component.html',
  styleUrls: ['./mantenimiento-creaedita.component.css']
})
export class MantenimientoCreaeditaComponent implements OnInit {
  
  mantenimiento:Mantenimiento=new Mantenimiento();
  id:number=0;
  edicion:boolean=false;
  listaVehiculos:Vehiculo[]=[];
  VehiculoSeleccionado:number=0;
  listaMecanicos:Mecanico[]=[];
  MecanicoSeleccionado:number=0;
  mensaje:string="";

  constructor(private MantenimientoService:MantenimientoService, private router:Router, private route:ActivatedRoute, private VehiculoService:VehiculoService, private MecanicoService:MecanicoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.VehiculoService.listar().subscribe(data=>{this.listaVehiculos=data});
    this.MecanicoService.listar().subscribe(data=>{this.listaMecanicos=data});
  }
  aceptar(): void {
    if (this.mantenimiento.nmantenimiento.length>0 && this.VehiculoSeleccionado>0) {
      let t = new Vehiculo();
      let m = new Mecanico();
      t.cvehiculo=this.VehiculoSeleccionado;
      m.cmecanico=this.MecanicoSeleccionado;
      this.mantenimiento.cmecanico=m;
      this.mantenimiento.cvehiculo=t;

      if (this.edicion) {
      this.MantenimientoService.modificar(this.mantenimiento).subscribe(() => {
        this.MantenimientoService.listar().subscribe(data => {
          this.MantenimientoService.setLista(data);
        });
      });

    } else {

      this.MantenimientoService.insertar(this.mantenimiento).subscribe(() => {
        this.MantenimientoService.listar().subscribe(data => {
          this.MantenimientoService.setLista(data);
        });
      }
      ,err=> {console.log(err);});
    }

      this.router.navigate(['mantenimientos']);
    } else {

      this.mensaje = "Complete los valores requeridos";

    }
  }
  init() {
    if (this.edicion) {
      this.MantenimientoService.listarId(this.id).subscribe(data => {
        this.mantenimiento = data;
        console.log(data);
       this.VehiculoSeleccionado=data.cvehiculo.cvehiculo;
       this.MecanicoSeleccionado=data.cmecanico.cmecanico;
      });
    }

  }
}
