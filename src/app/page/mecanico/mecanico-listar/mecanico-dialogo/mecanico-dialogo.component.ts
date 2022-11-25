import { MecanicoService } from 'src/app/service/mecanico.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mecanico-dialogo',
  templateUrl: './mecanico-dialogo.component.html',
  styleUrls: ['./mecanico-dialogo.component.css']
})
export class MecanicoDialogoComponent implements OnInit {

  constructor(private mecanicoService:MecanicoService, private dialogRef:MatDialogRef<MecanicoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.mecanicoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
