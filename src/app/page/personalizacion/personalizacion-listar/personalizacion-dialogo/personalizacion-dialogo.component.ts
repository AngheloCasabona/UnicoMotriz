import { PersonalizacionService } from './../../../../service/personalizacion.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-personalizacion-dialogo',
  templateUrl: './personalizacion-dialogo.component.html',
  styleUrls: ['./personalizacion-dialogo.component.css']
})
export class PersonalizacionDialogoComponent implements OnInit {

  constructor(private PersonalizacionService: PersonalizacionService, private dialogRef: MatDialogRef<PersonalizacionDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.PersonalizacionService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
