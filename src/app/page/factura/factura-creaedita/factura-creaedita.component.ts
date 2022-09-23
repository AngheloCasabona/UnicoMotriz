import { Factura } from './../../../model/factura';
import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/service/factura.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-factura-creaedita',
  templateUrl: './factura-creaedita.component.html',
  styleUrls: ['./factura-creaedita.component.css']
})
export class FacturaCreaeditaComponent implements OnInit {

  factura: Factura= new Factura();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private facturaService : FacturaService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {

    if (this.factura.DFecha.length  > 0) {
      if (this.edicion) {
      this.facturaService.modificar(this.factura).subscribe(data => {
        this.facturaService.listar().subscribe(data => {
          this.facturaService.setLista(data);
        })
      })

    } else {

      this.facturaService.insertar(this.factura).subscribe(data => {
        this.facturaService.listar().subscribe(data => {
          this.facturaService.setLista(data);
        })
      })
    }


      this.router.navigate(['factura']);
    } else {

      this.mensaje = "Complete los valores requeridos";

    }
  }
  init() {
    if (this.edicion) {
      this.facturaService.listarId(this.id).subscribe(data => {
        this.factura = data;
      })
    }

  }
}
