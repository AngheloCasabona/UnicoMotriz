import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mecanico',
  templateUrl: './mecanico.component.html',
  styleUrls: ['./mecanico.component.css']
})
export class MecanicoComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
