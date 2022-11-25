import { DetalleVentaService } from './../../../../service/detalleventa.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalleventa-dialogo',
  templateUrl: './detalleventa-dialogo.component.html',
  styleUrls: ['./detalleventa-dialogo.component.css']
})
export class DetalleVentaDialogoComponent implements OnInit {

  constructor(private detalleventaService: DetalleVentaService, private dialogRef: MatDialogRef<DetalleVentaDialogoComponent>) { }

  ngOnInit(): void {  }

  confirmar(estado: boolean) {
    this.detalleventaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}