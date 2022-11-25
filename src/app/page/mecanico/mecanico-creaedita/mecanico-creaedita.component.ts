import { TallerService } from './../../../service/taller.service';
import { Taller } from './../../../model/taller';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Mecanico } from 'src/app/model/mecanico';
import { MecanicoService } from 'src/app/service/mecanico.service';

@Component({
  selector: 'app-mecanico-creaedita',
  templateUrl: './mecanico-creaedita.component.html',
  styleUrls: ['./mecanico-creaedita.component.css']
})
export class MecanicoCreaeditaComponent implements OnInit {

  mecanico:Mecanico=new Mecanico();
  id:number=0;
  edicion:boolean=false;
  listaTalleres:Taller[]=[];
  TallerSeleccionado:number=0;
  mensaje:string="";

  constructor(private mecanicoService:MecanicoService, private router:Router, private route:ActivatedRoute, private tallerService:TallerService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.tallerService.listar().subscribe(data=>{this.listaTalleres=data});
  }
  aceptar(): void {
    if (this.mecanico.nmecanico.length > 0 && this.TallerSeleccionado> 0) {
      let t = new Taller();
      t.ctaller=this.TallerSeleccionado;
      this.mecanico.taller=t;

      if (this.edicion) {
      this.mecanicoService.modificar(this.mecanico).subscribe(data => {
        this.mecanicoService.listar().subscribe(data => {
          this.mecanicoService.setLista(data);
        });
      });

    } else {

      this.mecanicoService.insertar(this.mecanico).subscribe(data => {
        this.mecanicoService.listar().subscribe(data => {
          this.mecanicoService.setLista(data);
        });
      }
      ,err=> {console.log(err);});
    }

      this.router.navigate(['mecanicos']);
    } else {

      this.mensaje = "Complete los valores requeridos";

    }
  }
  init() {
    if (this.edicion) {
      this.mecanicoService.listarId(this.id).subscribe(data => {
        this.mecanico = data;
        console.log(data);
       this.TallerSeleccionado=data.taller.ctaller;
      });
    }

  }
}
