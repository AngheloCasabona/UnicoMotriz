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
  mensaje:string="";
  edicion:boolean=false;
  id:number=0;

  constructor(private mecanicoService:MecanicoService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.mecanico.nmecanico.length > 0 && this.mecanico.tcorreo.length > 0) {
      if (this.edicion) {
      this.mecanicoService.modificar(this.mecanico).subscribe(data => {
        this.mecanicoService.listar().subscribe(data => {
          this.mecanicoService.setLista(data);
        })
      })

    } else {

      this.mecanicoService.insertar(this.mecanico).subscribe(data => {
        this.mecanicoService.listar().subscribe(data => {
          this.mecanicoService.setLista(data);
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
      this.mecanicoService.listarId(this.id).subscribe(data => {
        this.mecanico = data;
      })
    }

  }
}
