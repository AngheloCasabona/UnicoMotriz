import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/model/factura';
import { FacturaService } from 'src/app/service/factura.service';

@Component({
  selector: 'app-factura-buscar',
  templateUrl: './factura-buscar.component.html',
  styleUrls: ['./factura-buscar.component.css']
})
export class FacturaBuscarComponent implements OnInit {
  textoBuscar: string = "";

  constructor(private facturaService: FacturaService) { }

  ngOnInit(): void {  }

  buscar(f: any) {
    let array: Factura[] = [];
    this.facturaService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.DFecha.includes(f.target.value)) {
          array.push(data[index]);
        }
      });
      this.facturaService.setLista(array);
    })
  }
}
