import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private ProductoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  aceptar(): void {
    if (this.producto.nameProducto.length > 0 && this.producto.costoProducto > 0 &&
         this.producto.ventaProducto > 0 ) {
      this.ProductoService.insertar(this.producto).subscribe(data=> {
        this.ProductoService.listar().subscribe(data =>{
          this.ProductoService.setLista(data);
        })
      })
      this.router.navigate(['productos']);
    } else {
      this.mensaje = "Completar los valores solicitados";
    }
  }

}
