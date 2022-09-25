import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TallerService } from 'src/app/service/taller.service';

@Component({
  selector: 'app-taller-dialogo',
  templateUrl: './taller-dialogo.component.html',
  styleUrls: ['./taller-dialogo.component.css']
})
export class TallerDialogoComponent implements OnInit {

  constructor(private tallerService: TallerService, private dialogRef: MatDialogRef<TallerDialogoComponent>) { }

  ngOnInit(): void {  }

  confirmar(estado: boolean) {
    this.tallerService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
