import { MantenimientoService } from './../../../../service/mantenimiento.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mantenimiento-dialogo',
  templateUrl: './mantenimiento-dialogo.component.html',
  styleUrls: ['./mantenimiento-dialogo.component.css']
})
export class MantenimientoDialogoComponent implements OnInit {

  constructor(private MantenimientoService: MantenimientoService,private dialogRef: MatDialogRef<MantenimientoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.MantenimientoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
