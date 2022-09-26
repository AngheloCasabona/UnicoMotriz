import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-producto-dialogo',
  templateUrl: './producto-dialogo.component.html',
  styleUrls: ['./producto-dialogo.component.css']
})
export class ProductoDialogoComponent implements OnInit {

  constructor(private ProductoService: ProductoService,
    private dialogRef: MatDialogRef<ProductoDialogoComponent>
  ) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.ProductoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}