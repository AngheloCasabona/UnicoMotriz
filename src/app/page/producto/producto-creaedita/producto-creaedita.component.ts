import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-creaedita',
  templateUrl: './producto-creaedita.component.html',
  styleUrls: ['./producto-creaedita.component.css']
})
export class productoCreaeditaComponent implements OnInit {
  producto: Producto = new Producto();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private ProductoService: ProductoService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.producto.nameProducto.length > 0 && this.producto.costoProducto > 0 &&
         this.producto.ventaProducto > 0 ) {
          if (this.edicion) {
            this.ProductoService.modificar(this.producto).subscribe(data => {
              this.ProductoService.listar().subscribe(data => {
                this.ProductoService.setLista(data);
              })
            })
          } else {
      this.ProductoService.insertar(this.producto).subscribe(data=> {
        this.ProductoService.listar().subscribe(data =>{
          this.ProductoService.setLista(data);
        })
      })}
      this.router.navigate(['productos']);
    } else {
      this.mensaje = "Completar los valores solicitados";
    }
  }
  
  init() {
    if (this.edicion) {
      this.ProductoService.listarId(this.id).subscribe(data => {
        this.producto = data;
      })
    }

  }

}
