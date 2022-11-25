import { VehiculoService } from './../../../service/vehiculo.service';
import { Vehiculo } from './../../../model/vehiculo';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Personalizacion } from 'src/app/model/personalizacion';
import { PersonalizacionService } from 'src/app/service/personalizacion.service';

@Component({
  selector: 'app-personalizacion-creaedita',
  templateUrl: './personalizacion-creaedita.component.html',
  styleUrls: ['./personalizacion-creaedita.component.css']
})
export class PersonalizacionCreaeditaComponent implements OnInit {

  personalizacion:Personalizacion=new Personalizacion();
  id:number=0;
  edicion:boolean=false;
  listaVehiculos:Vehiculo[]=[];
  VehiculoSeleccionado:number=0;
  mensaje:string="";

  constructor(private PersonalizacionService:PersonalizacionService, private router:Router, private route:ActivatedRoute, private VehiculoService:VehiculoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.VehiculoService.listar().subscribe(data=>{this.listaVehiculos=data});
  }
  aceptar(): void {
    if (this.personalizacion.npersonalizacion.length > 0) {
      let t = new Vehiculo();
      t.cvehiculo=this.VehiculoSeleccionado;
      this.personalizacion.cvehiculo=t;

      if (this.edicion) {
      this.PersonalizacionService.modificar(this.personalizacion).subscribe(data => {
        this.PersonalizacionService.listar().subscribe(data => {
          this.PersonalizacionService.setLista(data);
        });
      });

    } else {

      this.PersonalizacionService.insertar(this.personalizacion).subscribe(data => {
        this.PersonalizacionService.listar().subscribe(data => {
          this.PersonalizacionService.setLista(data);
        });
      }
      ,err=> {console.log(err);});
    }

      this.router.navigate(['personalizaciones']);
    } else {

      this.mensaje = "Complete los valores requeridos";

    }
  }
  init() {
    if (this.edicion) {
      this.PersonalizacionService.listarId(this.id).subscribe(data => {
        this.personalizacion = data;
        console.log(data);
       this.VehiculoSeleccionado=data.cvehiculo.cvehiculo;
      });
    }

  }
}