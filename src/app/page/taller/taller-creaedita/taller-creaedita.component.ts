import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Taller } from 'src/app/model/taller';
import { TallerService } from 'src/app/service/taller.service';

@Component({
  selector: 'app-taller-creaedita',
  templateUrl: './taller-creaedita.component.html',
  styleUrls: ['./taller-creaedita.component.css']
})
export class TallerCreaeditaComponent implements OnInit {

  taller: Taller = new Taller();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private tallerService : TallerService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.taller.ntaller.length > 0 && this.taller.tdireccion.length > 0) {
      if (this.edicion) {
      this.tallerService.modificar(this.taller).subscribe(data => {
        this.tallerService.listar().subscribe(data => {
          this.tallerService.setLista(data);
        })
      })

    } else {

      this.tallerService.insertar(this.taller).subscribe(data => {
        this.tallerService.listar().subscribe(data => {
          this.tallerService.setLista(data);
        })
      })
    }

      this.router.navigate(['talleres']);
    } else {

      this.mensaje = "Complete los valores requeridos";

    }
  }
  init() {
    if (this.edicion) {
      this.tallerService.listarId(this.id).subscribe(data => {
        this.taller = data;
        console.log(data);
      })
    }

  }
}
