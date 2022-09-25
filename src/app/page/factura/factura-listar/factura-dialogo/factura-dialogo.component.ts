import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FacturaService } from 'src/app/service/factura.service';

@Component({
  selector: 'app-factura-dialogo',
  templateUrl: './factura-dialogo.component.html',
  styleUrls: ['./factura-dialogo.component.css']
})
export class FacturaDialogoComponent implements OnInit {

  constructor(private facturaService: FacturaService, private dialogRef: MatDialogRef<FacturaDialogoComponent>) { }

  ngOnInit(): void {  }

  confirmar(estado: boolean) {
    this.facturaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
