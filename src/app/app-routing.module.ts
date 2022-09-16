import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './page/reserva/reserva.component';
import { HistorialComponent } from './page/historial/historial.component';
const routes: Routes = [
  {
    path:"historial", component: HistorialComponent, children:[]
  },
  {
    path:"reserva", component:ReservaComponent, children:[]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
