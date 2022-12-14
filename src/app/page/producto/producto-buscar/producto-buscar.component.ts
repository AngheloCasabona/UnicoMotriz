import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-buscar',
  templateUrl: './producto-buscar.component.html',
  styleUrls: ['./producto-buscar.component.css']
})
export class ProductoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private ProductoService: ProductoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Producto[] = [];
    this.ProductoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nameProducto.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.ProductoService.setLista(array);
    })
  }

}
